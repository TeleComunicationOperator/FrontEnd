import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../models/Client';

@Component({
  selector: 'app-pop-up-see-key-words',
  templateUrl: './pop-up-see-key-words.component.html',
  styleUrls: ['./pop-up-see-key-words.component.scss']
})
export class PopUpSeeKeyWordsComponent implements OnInit {
  client:Client
 
  

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { 
    this.client=data;
   
  }

  ngOnInit(): void {
  }

}
