export class Operator{
    id:number;
    name: string;
    lastName: string;
    dni: string;
    phone: string;
    email: string;
    type: string;
    keyWordList: string[];
    constructor(name:string,lastName:string,dni:string,type:string,phone:string,email:string){
        this.name=name;
        this.lastName=lastName;
        this.dni=dni;
        this.phone=phone;
        this.email=email;
        this.type=type;
    }
}