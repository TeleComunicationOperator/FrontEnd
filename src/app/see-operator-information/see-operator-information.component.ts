import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Operator } from '../models/Operator';
import { ServicesService } from '../services.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-see-operator-information',
  templateUrl: './see-operator-information.component.html',
  styleUrls: ['./see-operator-information.component.scss']
})
export class SeeOperatorInformationComponent implements OnInit {
  operator:Operator;
  table:string
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private service:ServicesService) { }

  ngOnInit(): void {
    this.operator=this.data;
    this.table=this.data.keyWordList.map(function(a: any){return a.name})
    console.log(this.table)
  }

}
