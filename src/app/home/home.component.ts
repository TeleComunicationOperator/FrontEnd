import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Operator } from '../models/Operator';
import { ServicesService } from '../services.service';
import { User } from '../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  operators:Operator[];
  user:User;
  constructor(private router:Router,private breakpointObserver: BreakpointObserver,private service:ServicesService) { }

  titulo="Home"
  ngOnInit(): void {
    this.service.getOperators().subscribe(data=>{
      this.operators=data;
    })

    
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  

}
