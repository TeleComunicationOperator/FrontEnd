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
  

  constructor(private router:Router,public loginService:ServicesService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  register(){
    if(this.loginService.authentication(this.email,this.password)){
      this.snackBar.openFromComponent(SnackBarSuccesfullComponent,{duration:1000})
      this.router.navigate(['admin']);
      this.invalidLogin=false;
      return ;
    }


    if(this.loginService.authenticationOperator(this.email,this.password)){
     
      localStorage.setItem("email",this.email);
      this.snackBar.openFromComponent(SnackBarSuccesfullComponent,{duration:1000})
      this.router.navigate(['teleoperadores']);
      this.invalidLogin=false;
      return ;
    }
    
    this.snackBar.openFromComponent(SnackBarComponentFail,{duration:1000})
    
    
    this.invalidLogin=true;
    return ;
    
  }

}
