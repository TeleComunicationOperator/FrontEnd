import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../models/Client';

@Component({
  selector: 'app-see-client-info',
  templateUrl: './see-client-info.component.html',
  styleUrls: ['./see-client-info.component.scss']
})
export class SeeClientInfoComponent implements OnInit {
  client:Client;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {

    this.client=this.data;
  }

}
