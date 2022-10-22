export class KeyWord{
    id:number;
    name:string;
    active:boolean | any;
    constructor(name:string,active:boolean){
        this.name=name;
        this.active=active
    }
}