import { Component, OnInit } from '@angular/core';
import { KeyWord } from '../models/KeyWord';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-key-word-list-operator',
  templateUrl: './key-word-list-operator.component.html',
  styleUrls: ['./key-word-list-operator.component.scss']
})
export class KeyWordListOperatorComponent implements OnInit {
  keywords:KeyWord[];

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.service.getAllKeys().subscribe((data)=>{
      this.keywords=data;
      console.log("llaves",this.keywords)

    })
  }

}
