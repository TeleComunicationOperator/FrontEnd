import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KeyWord } from '../models/KeyWord';
import { Operator } from '../models/Operator';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-key-word-list-operator',
  templateUrl: './key-word-list-operator.component.html',
  styleUrls: ['./key-word-list-operator.component.scss']
})
export class KeyWordListOperatorComponent implements OnInit {
  keywords:KeyWord[];
  operator:Operator;
  seleccionados:KeyWord[]=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private service:ServicesService,private popUp:MatDialog) { }

  ngOnInit(): void {
    this.service.getAllKeys().subscribe((data)=>{
      this.keywords=data.filter((t: { active: boolean; })=>t.active==true);
      console.log("llaves",this.keywords)

    })
    this.operator=this.data;
  }

  save(){
    console.log(this.seleccionados)
    this.operator.keyWordList = this.seleccionados
    this.service.updateOperator(this.operator)
    this.popUp.closeAll()
  }
}
