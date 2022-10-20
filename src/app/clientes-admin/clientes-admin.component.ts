import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { Client } from '../models/Client';
import { PopUpSeeKeyWordsComponent } from '../pop-up-see-key-words/pop-up-see-key-words.component';
import { PopUpSeeSpeechComponent } from '../pop-up-see-speech/pop-up-see-speech.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-clientes-admin',
  templateUrl: './clientes-admin.component.html',
  styleUrls: ['./clientes-admin.component.scss']
})
export class ClientesAdminComponent implements OnInit {

  clients:Client[]

  constructor(private router:Router,private breakpointObserver: BreakpointObserver,private service:ServicesService,private popUp:MatDialog) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  ngOnInit(): void {
    this.service.getClients().subscribe(data=>{
      this.clients=data;
    })
  }

  asignar(client:Client){
    console.log("clientecompleto",client)
    console.log("cliente",client.id);
    this.popUp.open(PopUpComponent,{data:client.id});
  }

  seeKeyWords(client:Client){
    this.popUp.open(PopUpSeeKeyWordsComponent,{data:client})

  }

  seeSpeech(client:Client){
    this.popUp.open(PopUpSeeSpeechComponent,{data:client})

  }

  public logOut(){
    localStorage.clear();
  }

}
