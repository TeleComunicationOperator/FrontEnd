export class Client{
    id:number;
    name: string;
    lastName: string;
    speech: string;
    key: string[];
    constructor(name:string,lastName:string,speech:string,key:string[]){
        this.name=name;
        this.lastName=lastName;
        this.speech=speech;
        this.key=key;
    }
}