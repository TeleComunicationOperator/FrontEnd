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
      this.operator=data;
    })

    this.register();

  }
  register(){
    this.loginService.authenticationOperator(this.email,this.password).subscribe((res)=>{
      if(res.length>0){
        localStorage.setItem("email",this.email);
        this.snackBar.openFromComponent(SnackBarSuccesfullComponent,{duration:2000,panelClass:'alert-green'})
        this.router.navigate(['teleoperadores']);
        this.invalidLogin=false;
        return;
      }
   },
   (err) => {
    if(err.status==422){
      this.snackBar.openFromComponent(SnackBarComponentFail,{duration:2000,panelClass:'alert-red'})
      this.invalidLogin=true;
      return;
    }
   })
     if(this.loginService.authentication(this.email,this.password)){
       this.snackBar.openFromComponent(SnackBarSuccesfullComponent,{duration:2000,panelClass:'alert-green'})
       this.router.navigate(['admin']);
       this.invalidLogin=false;
       return ;
     }
     
   
 }

}
