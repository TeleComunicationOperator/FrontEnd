import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KeyWord } from '../models/KeyWord';
import { ServicesService } from '../services.service';
import { SnackBarImcompleteRegisterFieldsComponent } from '../snack-bar-imcomplete-register-fields/snack-bar-imcomplete-register-fields.component';
import { SnackBarUpdatedKeyComponent } from '../snack-bar-updated-key/snack-bar-updated-key.component';

@Component({
  selector: 'app-update-keyword-info',
  templateUrl: './update-keyword-info.component.html',
  styleUrls: ['./update-keyword-info.component.scss']
})
export class UpdateKeywordInfoComponent implements OnInit {

  keyword:KeyWord;
  name:string="";
  status:any="";

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private snackBar:MatSnackBar,private service:ServicesService) { }

  ngOnInit(): void {
    
    this.keyword=this.data;
    if(this.keyword.active==true) this.status="ACTIVO"
    else if(this.keyword.active==false) this.status="INACTIVO"
  }

  public saveChanges(){
    console.log("estado",this.status)
    console.log("estadito",this.keyword.active)
    console.log("kia",this.keyword)
    if(this.keyword.active=="ACTIVO") this.keyword.active=true;
    else if(this.keyword.active=="INACTIVO") this.keyword.active=false; 
    console.log("kid",this.keyword)
    if(this.keyword.name=="" || this.keyword.active==undefined){
      this.snackBar.openFromComponent(SnackBarImcompleteRegisterFieldsComponent,{duration:2000,panelClass:'alert-red'})
    }else{
      this.service.updateKey(this.keyword);
      this.snackBar.openFromComponent(SnackBarUpdatedKeyComponent,{duration:2000,panelClass:'alert-green'})
      setTimeout(()=>{
        window.location.reload();
      },2000)
      
    }
  }

}
