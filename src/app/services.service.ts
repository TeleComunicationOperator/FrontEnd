import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Operator } from './models/Operator';
const TOKEN_KEY='AuthToken';
const EMAIL_KEY='AuthUsername';
const USER_ROLE='AuthUserRoles';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  roles:Array<string>=[];
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  Url='http://34.238.36.139/'

  constructor(private http:HttpClient) { }

  authentication(email: any,password: any){
    if(email.match("omar_jesus23@hotmail.com") && password=="waltertrash"){
      
      return true;
    }
    return false;
  }

  getOperators(){
    return this.http.get<Operator[]>(this.Url + "operators");
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
