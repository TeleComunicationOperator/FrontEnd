import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { KeyWord } from '../models/KeyWord';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-key-words-admin',
  templateUrl: './key-words-admin.component.html',
  styleUrls: ['./key-words-admin.component.scss']
})
export class KeyWordsAdminComponent implements OnInit {

  keywords:KeyWord[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private service:ServicesService,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.service.getAllKeys().subscribe((data)=>{
      this.keywords=data;
    })
    console.log("llaves",this.keywords)
  }

  public logOut(){
    localStorage.clear();
  }

}
