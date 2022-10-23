import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Operator } from './models/Operator';
import { User } from './models/User';
import { Client } from './models/Client';
import { KeyWord } from './models/KeyWord';
import { Token } from '@angular/compiler';
import { UserUpdate } from './models/Userupdate';
const TOKEN_KEY='AuthToken';
const EMAIL_KEY='AuthUsername';
const USER_ROLE='AuthUserRoles';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  operator:Operator;
  roles:Array<string>=[];
  keyword:KeyWord;
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  Url=' https://www.tlcomunication.online/'
  UrlUsers='https://www.tlcomunication.online/users/signup'
  UrlSpeech='http://34.197.6.89/speech'
  token: string;

  constructor(private http:HttpClient) { }

  authentication(email: any,password: any){
    if(email.match("grecia@gmail.com") && password=="grecia"){
      return true;
    }
    return false;
  }
   authenticationOperator(email: any,password: any){
     return this.signin(email,password)
     
  }

   signin(email:any,password:any){
     return this.http.get(this.Url+'users/signin?email=' + email+'&password='+ password,{responseType:'text'})
  }
  public updateOperator(operator:Operator){
    console.log("operator",operator)

    return this.http.put<Operator>(this.Url+"operators/"+operator.id,operator).subscribe();

  }
  public updateUser(user:UserUpdate){
    var email=localStorage.getItem("email");
    this.http.put<UserUpdate>(`https://www.tlcomunication.online/users/update`+email,user).subscribe();
    localStorage.clear();
    localStorage.setItem("email",user.email)
    return;
  }

  public updateKey(key:KeyWord){
    return this.http.put<KeyWord>(this.Url+"keys/"+key.id,key).subscribe();
  }

  
  getOperators(){
    return this.http.get<Operator[]>(this.Url + "operators");
  }
  getClients(){
    return this.http.get<Client[]>(this.Url + "clients");
  }

  getSpeech(file:any){
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<KeyWord>(`http://34.197.6.89/speech`,formData);
  }

  public getOperatorByEmail(email:string | null){
    return this.http.get<Operator>(this.Url+"operators/email/"+email);
  }

  assignSpeech(id:number,keyWord:KeyWord){
    console.log("Keyword a Postman",keyWord)
    return this.http.put(this.Url+"clients/speech/" + id,keyWord)
  }

  public getAllKeys(){
    return this.http.get<KeyWord[]>(this.Url+"keys");
  }

  public createKey(key:KeyWord){
    console.log("llave a crear",key)
    return this.http.post<KeyWord>(this.Url+"keys",key).subscribe();

  }


  public createOperator(operator:Operator,user:User){
    return this.http.post<Operator>(this.Url + "operators",operator);
  }

  public createUser(operator:Operator,user:User){
    user.username=operator.name+"."+operator.lastName;
    return this.http.post<User>(this.UrlUsers,user);
  }

  public changeKeyStatus(keyword:KeyWord){
    this.keyword=keyword
    console.log("url",this.Url+"keys"+"/"+keyword.id)
    if(keyword.active==true) {
      this.keyword.active=false;
      console.log("llavesitaApasar",this.keyword)
      //console.log("response",this.http.put<KeyWord>(this.Url+"keys"+keyword.id,this.keyword))
      return this.http.put<KeyWord>(this.Url+"keys/"+keyword.id,this.keyword).subscribe();
    }

    if(keyword.active==false) {
      this.keyword.active=true;
      console.log("llavesitaApasar",this.keyword)
      return this.http.put<KeyWord>(this.Url+"keys/"+keyword.id,this.keyword).subscribe();
    }
    return;
  }

  public changeOperatorType(operator:Operator){
    if(operator.type=="PENDIENTE"){
      operator.type="NOVATO";
      return this.http.put<Operator>(this.Url+"operators/"+operator.id,operator).subscribe();
    }
    
    if(operator.type=="NOVATO"){
      operator.type="EXPERTO";
      return this.http.put<Operator>(this.Url+"operators/"+operator.id,operator).subscribe();
    }

    if(operator.type=="EXPERTO"){
      operator.type="NOVATO";
      return this.http.put<Operator>(this.Url+"operators/"+operator.id,operator).subscribe();
    }

    return;
  }

  

  public setToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }
  public getToken():string | any{
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setEmail(email:string):void{
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY,email);
  }
  public getEmail():string | any{
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setRoles(roles:string[]):void{
    window.sessionStorage.removeItem(USER_ROLE);
    window.sessionStorage.setItem(USER_ROLE,JSON.stringify(roles));
  }

  public getRoles():string[] | any{
    this.roles=[];

    if(sessionStorage.getItem(USER_ROLE)){
      JSON.parse(sessionStorage.getItem(USER_ROLE)!).foreach((role:any)=>{
        this.roles.push(role.role);
      })
    }

    return this.roles;
  }

  public logOut():void{
    window.sessionStorage.clear();

  }

  


}
