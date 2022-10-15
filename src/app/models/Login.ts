export class Login{
    username: string;
    email: string;
    password: string;
    appUserRoles:string[];

    constructor(email:string,password:string){
        this.email=email;
        this.password=password;
    }
}