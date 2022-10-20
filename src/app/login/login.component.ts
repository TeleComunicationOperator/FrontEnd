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

  async register(){

    this.logged=await this.loginService.authenticationOperator(this.email,this.password);

    setTimeout(()=>{

      if(this.loginService.authentication(this.email,this.password)){
        this.snackBar.open("¡Logueado satisfactoriamente! :)",'',{duration:2000,panelClass:'alert-green'})
        this.router.navigate(['admin']);
        this.invalidLogin=false;
        return ;
      }
  
  
      if(this.logged){
       console.log("entra 1")
        localStorage.setItem("email",this.email);
        this.snackBar.open("¡Logueado satisfactoriamente! :)",'',{duration:2000,panelClass:'alert-green'})
        this.router.navigate(['teleoperadores']);
        this.invalidLogin=false;
        return ;
      }
  
      console.log("entra 2");
      
      this.snackBar.open("Credenciales incorrectas :(",'',{duration:2000,panelClass:'alert-red'})

    },2000)
   
   
    
    
    
    this.invalidLogin=true;
    return ;
    
  }

}
