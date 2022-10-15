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
    console.log("name",this.name)
    console.log("lastName",this.lastName)
    console.log("dni",this.dni)
    console.log("phone",this.phone)
    console.log("email",this.email)
    console.log("password",this.password)
    this.user=new User(this.name,this.email,this.password,["ROLE_CLIENT"]);
    this.operator=new Operator(this.name,this.lastName,this.dni,this.phone,this.email);
    this.service.createOperator(this.operator,this.user).subscribe(data=>{
      alert("Operator creado");
    })
    this.router.navigate(['login']);
  }

}
