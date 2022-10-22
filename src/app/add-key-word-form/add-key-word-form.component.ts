import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KeyWord } from '../models/KeyWord';
import { ServicesService } from '../services.service';
import { SnackBarImcompleteRegisterFieldsComponent } from '../snack-bar-imcomplete-register-fields/snack-bar-imcomplete-register-fields.component';
import { SucessfullCreatedKeyComponent } from '../sucessfull-created-key/sucessfull-created-key.component';

@Component({
  selector: 'app-add-key-word-form',
  templateUrl: './add-key-word-form.component.html',
  styleUrls: ['./add-key-word-form.component.scss']
})
export class AddKeyWordFormComponent implements OnInit {
  keyword:KeyWord;

  name:string="";
  active:any="";

  constructor(private snackBar:MatSnackBar,private service:ServicesService) { }

  ngOnInit(): void {
  }

  public addNewKeyword(){
    this.keyword=new KeyWord(this.name,this.active);

    if(this.active=="ACTIVO") this.keyword.active=true
    else if(this.active=="INACTIVO") this.keyword.active=false;

    if(this.name=="" || this.active==""){
      this.snackBar.openFromComponent(SnackBarImcompleteRegisterFieldsComponent,{duration:2000,panelClass:'alert-red'})
    }else{
      
      this.service.createKey(this.keyword);
      this.snackBar.openFromComponent(SucessfullCreatedKeyComponent,{duration:2000,panelClass:'alert-green'})
      setTimeout(()=>{
        window.location.reload();
      },2000)
      
    }

  }

}
