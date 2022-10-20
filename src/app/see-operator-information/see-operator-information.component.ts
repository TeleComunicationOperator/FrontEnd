import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Operator } from '../models/Operator';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-see-operator-information',
  templateUrl: './see-operator-information.component.html',
  styleUrls: ['./see-operator-information.component.scss']
})
export class SeeOperatorInformationComponent implements OnInit {
  operator:Operator;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private service:ServicesService) { }

  ngOnInit(): void {
    console.log("datasos",this.data);
    this.operator=this.data;
  }

}
