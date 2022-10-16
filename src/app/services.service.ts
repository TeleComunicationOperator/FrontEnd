import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Operator } from './models/Operator';
import { User } from './models/User';
import { Client } from './models/Client';
import { KeyWord } from './models/KeyWord';
const TOKEN_KEY='AuthToken';
const EMAIL_KEY='AuthUsername';
const USER_ROLE='AuthUserRoles';
var error: number | Object | string;
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  roles:Array<string>=[];
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  Url='http://34.238.36.139/'
  UrlUsers='http://34.238.36.139/users/signup'
  UrlSpeech='http://34.197.6.89/speech'

  constructor(private http:HttpClient) { }

  authentication(email: any,password: any){
    if(email.match("grecia@gmail.com") && password=="grecia"){
      return true;
    }
    return false;
  }
  authenticationOperator(email: any,password: any){
    if(this.signin(email,password)==422){
      return false;
    }

    if(this.signin(email,password)){
      return true;
    }
    return false;
  }

  signin(email:any,password:any){
     this.http.get(this.Url+'users/signin?email=' + email+'&password='+ password).subscribe((res) => {
    },(err:HttpErrorResponse)=>{error=err.status;})

    return error;
      
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

  assignSpeech(id:number,keyWord:KeyWord){
    console.log("Keyword a Postman",keyWord)
    return this.http.put(this.Url+"clients/speech/" + id,keyWord)
  }


  public createOperator(operator:Operator,user:User){
    this.http.post<User>(this.UrlUsers,user);
    return this.http.post<Operator>(this.Url + "operators",operator);
    
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
