export class User{
    username: string;
    email: string;
    password: string;
    appUserRoles:string[];
    constructor(username:string,email:string,password:string,appUserRoles:string[]){
        this.username=username;
        this.email=email;
        this.password=password;
        this.appUserRoles=appUserRoles;
    }
}