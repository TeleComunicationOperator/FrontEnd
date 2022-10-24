import { Component, Inject, OnInit } from '@angular/core';
import { Operator } from '../models/Operator';
import { ServicesService } from '../services.service';
import { UserUpdate } from '../models/Userupdate';
import { Router } from '@angular/router';
import { SnackBarIncompleteFieldsComponent } from '../snack-bar-incomplete-fields/snack-bar-incomplete-fields.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBardUpdatedOperatorComponent } from '../snack-bard-updated-operator/snack-bard-updated-operator.component';

@Component({
  selector: 'app-update-form-profile',
  templateUrl: './update-form-profile.component.html',
  styleUrls: ['./update-form-profile.component.scss']
})
export class UpdateFormProfileComponent implements OnInit {
  operator:Operator;
  user:UserUpdate;
  nombres:string="";
  apellidos:string="";
  dni:string="";
  telefono:string="";
  contrasenia:string="";
  email:string="";
  operator2:Operator;

  constructor(private router:Router,@Inject(MAT_DIALOG_DATA) public data:any,private service:ServicesService,private snackbar:MatSnackBar,private popUp:MatDialog) { }

  ngOnInit(): void {
    this.operator=this.data;
    this.nombres=this.operator.name;
    this.apellidos=this.operator.lastName;
    this.dni=this.operator.dni;
    this.telefono=this.operator.phone;
    this.email=localStorage.getItem("email")!;
    this.contrasenia=localStorage.getItem("password")!;
  }

  public saveChanges(){
    console.log("entra 1")
    console.log("nombre",this.nombres)
    console.log("apellidos",this.apellidos)
    console.log("dni",this.dni)
    if(this.nombres=="" || this.apellidos=="" || this.dni=="" || this.telefono=="" || this.contrasenia=="" || this.email==""){
      console.log("entra 2")
      this.snackbar.openFromComponent(SnackBarIncompleteFieldsComponent,{duration:2000,panelClass:'alert-red'})

    }else{
      console.log("entra 3")
      this.operator.name=this.nombres;
      this.operator.lastName=this.apellidos;
      this.operator.phone=this.telefono;
      this.user=new UserUpdate(this.email,this.contrasenia);
      this.service.updateUser(this.user);
      this.service.updateOperator(this.operator);
      this.router.navigate(['teleoperadores']);
      this.snackbar.openFromComponent(SnackBardUpdatedOperatorComponent,{duration:2000,panelClass:'alert-green'})
      this.popUp.closeAll();
      
    }
    
    
  }

}
