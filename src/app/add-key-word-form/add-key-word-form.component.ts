import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KeyWord } from '../models/KeyWord';
import { ServicesService } from '../services.service';
import { SnackBarImcompleteRegisterFieldsComponent } from '../snack-bar-imcomplete-register-fields/snack-bar-imcomplete-register-fields.component';
import { SnackBarIncompleteFieldsComponent } from '../snack-bar-incomplete-fields/snack-bar-incomplete-fields.component';
import { SucessfullCreatedKeyComponent } from '../sucessfull-created-key/sucessfull-created-key.component';

@Component({
  selector: 'app-add-key-word-form',
  templateUrl: './add-key-word-form.component.html',
  styleUrls: ['./add-key-word-form.component.scss']
})
export class AddKeyWordFormComponent implements OnInit {
  keyword:KeyWord;

  name:string="";
  active:any;

  constructor(private snackBar:MatSnackBar,private service:ServicesService) { }

  ngOnInit(): void {
  }

  public addNewKeyword(){
    console.log("nombre",this.name)
    console.log("estado",this.active)

    if(this.active=="ACTIVO") this.active=true
    else if(this.active=="INACTIVO") this.active=false;

    if(this.name=="" || this.active==undefined){
      this.snackBar.openFromComponent(SnackBarImcompleteRegisterFieldsComponent,{duration:2000,panelClass:'alert-red'})
    }else{
      this.keyword=new KeyWord(this.name,this.active);
      this.service.createKey(this.keyword);
      this.snackBar.openFromComponent(SucessfullCreatedKeyComponent,{duration:2000,panelClass:'alert-green'})
      window.location.reload();
    }

  }

}
