import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Operator } from '../models/Operator';
import { ServicesService } from '../services.service';
import { User } from '../models/User';
import { MatDialog } from '@angular/material/dialog';
import { SeeOperatorInformationComponent } from '../see-operator-information/see-operator-information.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  operators:Operator[];
  operator:Operator;
  user:User;
  constructor(private router:Router,private breakpointObserver: BreakpointObserver,private service:ServicesService,private popup:MatDialog) { }

  titulo="Home"
  ngOnInit(): void {
    
    this.service.getOperators().subscribe(data=>{
      this.operators=data;
    })

    var email:string | null=localStorage.getItem("email");
    this.service.getOperatorByEmail(email).subscribe((data)=>{
      this.operator=data;
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


    public seeMoreInfo(operator:Operator){
      console.log("verdaderadata",operator)
      this.popup.open(SeeOperatorInformationComponent,{data:operator});
      
    }

    public logOut(){
      localStorage.clear();
    }

  

}
