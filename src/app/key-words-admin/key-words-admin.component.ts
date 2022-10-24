import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, shareReplay } from 'rxjs';
import { AddKeyWordFormComponent } from '../add-key-word-form/add-key-word-form.component';
import { KeyWord } from '../models/KeyWord';
import { ServicesService } from '../services.service';
import { UpdateKeywordInfoComponent } from '../update-keyword-info/update-keyword-info.component';

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

  constructor(private service:ServicesService,private breakpointObserver: BreakpointObserver,private popUp:MatDialog) { }

  ngOnInit(): void {
    this.service.getAllKeys().subscribe((data)=>{
      this.keywords=data;
    })
    console.log("llaves",this.keywords)
  }

  public logOut(){
    localStorage.clear();
  }

  public changeToInactive(key:KeyWord){
    console.log("llavesitaInactiva",key)
    this.service.changeKeyStatus(key);

  }
  public changeToActive(key:KeyWord){
    console.log("llavesitaActiva",key)
    this.service.changeKeyStatus(key);

  }
  public addNewKeyword(){
    this.popUp.open(AddKeyWordFormComponent);
    this.popUp.closeAll()
    
  }

  public updateInfo(key:KeyWord){
    this.popUp.open(UpdateKeywordInfoComponent,{data:key});

  }

}
