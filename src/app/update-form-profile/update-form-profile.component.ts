import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Operator } from '../models/Operator';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update-form-profile',
  templateUrl: './update-form-profile.component.html',
  styleUrls: ['./update-form-profile.component.scss']
})
export class UpdateFormProfileComponent implements OnInit {
  

  operator:Operator;
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
  }

  public saveChanges(){
    this.operator2.name=this.nombres;
    this.operator2.lastName=this.apellidos;
    this.operator2.dni=this.dni;
    this.operator2.phone=this.telefono;
  }

}
