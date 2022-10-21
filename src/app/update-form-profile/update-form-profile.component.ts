import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Operator } from '../models/Operator';
import { ServicesService } from '../services.service';
import { User } from '../models/User';

@Component({
  selector: 'app-update-form-profile',
  templateUrl: './update-form-profile.component.html',
  styleUrls: ['./update-form-profile.component.scss']
})
export class UpdateFormProfileComponent implements OnInit {
  operator:Operator;
  user:User;
  nombres:string;
  apellidos:string;
  dni:string;
  telefono:string;
  contrasenia:string;
  email:string;
  operator2:Operator;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private service:ServicesService) { }

  ngOnInit(): void {

    this.operator=this.data;
   
    console.log("AEA2",this.operator2)
    console.log("AEA3",this.user)
  }

  public saveChanges(){
    console.log("AEA",this.operator)
    this.operator.name=this.nombres;
    this.operator.lastName=this.apellidos;
    this.operator.phone=this.telefono;
    this.user.email=this.email;
    this.user.password=this.user.password;
    console.log("AEA",this.operator)
    console.log("Operador a pasar",this.operator2)
    console.log("Usuario a pasar",this.user);
    this.service.updateUser(this.user);
    this.service.updateOperator(this.operator2);
  }

}
