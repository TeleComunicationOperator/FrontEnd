import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { Client } from '../models/Client';
import { Operator } from '../models/Operator';
import { ServicesService } from '../services.service';

import { PopUpComponent } from '../pop-up/pop-up.component';
import {MatDialog} from '@angular/material/dialog';
import { PopUpSeeSpeechComponent } from '../pop-up-see-speech/pop-up-see-speech.component';
import { PopUpSeeKeyWordsComponent } from '../pop-up-see-key-words/pop-up-see-key-words.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-home-operator',
  templateUrl: './home-operator.component.html',
  styleUrls: ['./home-operator.component.scss']
})
export class HomeOperatorComponent implements OnInit {

  clients:Client[];

  constructor(private router:Router,private breakpointObserver: BreakpointObserver,private service:ServicesService,private popUp:MatDialog) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  ngOnInit(): void {
    this.service.getClients().subscribe(data=>{
      this.clients=data;
      console.log("clientes",this.clients)
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

}
