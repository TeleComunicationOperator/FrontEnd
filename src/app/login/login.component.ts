import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RegisterComponent } from '../register/register.component';
import { SnackBarComponentFail } from '../snack-bar/snack-bar.component';
import { SnackBarSuccesfullComponent } from '../snack-bar-succesfull/snack-bar-succesfull.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email="";
  password="";
  invalidLogin=false;
  

  constructor(private router:Router,public loginService:ServicesService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  register(){
    console.log("Email",this.email)
    console.log("pass",this.password)
    if(this.loginService.authentication(this.email,this.password)){
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
