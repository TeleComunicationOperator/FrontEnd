import { Component, OnInit,Inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import {MatSnackBar} from '@angular/material/snack-bar';

import { SnackBarComponentFail } from '../snack-bar/snack-bar.component';
import { SnackBarSuccesfullComponent } from '../snack-bar-succesfull/snack-bar-succesfull.component';
import { Operator } from '../models/Operator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email="";
  password="";
  invalidLogin=false;
  operator:Operator;
  logged:boolean=false;
  

  constructor(private router:Router,public loginService:ServicesService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  public preRegister(){
    this.loginService.getOperatorByEmail(this.email).subscribe((data)=>{
      console.log("datita",data)
      this.operator=data;
    })

    this.register();

  }
  register(){

   
     if(this.loginService.authentication(this.email,this.password)){
       this.snackBar.openFromComponent(SnackBarSuccesfullComponent,{duration:2000,panelClass:'alert-green'})
       this.router.navigate(['admin']);
       this.invalidLogin=false;
       return ;
     }

     if(this.operator!=null){
       console.log("dato entrante",this.loginService.getOperatorByEmail(this.email))
       console.log("entra");
       localStorage.setItem("email",this.email);
       this.snackBar.openFromComponent(SnackBarSuccesfullComponent,{duration:2000,panelClass:'alert-green'})
       this.router.navigate(['teleoperadores']);
       this.invalidLogin=false;
       
       return;
     }
     
     console.log("operador?",this.operator)
 
     console.log("entra 2");
     this.snackBar.openFromComponent(SnackBarComponentFail,{duration:2000,panelClass:'alert-red'})
     this.invalidLogin=true;
     return;
   
 }

}
