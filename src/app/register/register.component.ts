import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operator } from '../models/Operator';
import { User } from '../models/User';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:User;
  operator:Operator;

  name='';
  lastName='';
  dni='';
  phone='';
  email='';
  password='';

  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor(private service:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.user=new User(this.name,this.email,this.password,["ROLE_CLIENT"]);
    this.operator=new Operator(this.name,this.lastName,this.dni,"PENDIENTE",this.phone,this.email);
    this.service.createUser(this.operator,this.user).subscribe(data=>{
      console.log("usuariocreado",data);
      alert("Usuario creado");
    })
    this.service.createOperator(this.operator,this.user).subscribe(data=>{
      console.log("operadorsito",data)
      
    })
  
    this.router.navigate(['login']);
  }

}
