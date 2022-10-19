import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Operator } from '../models/Operator';
import { ServicesService } from '../services.service';
import { UpdateFormProfileComponent } from '../update-form-profile/update-form-profile.component';

@Component({
  selector: 'app-pop-up-update-profile',
  templateUrl: './pop-up-update-profile.component.html',
  styleUrls: ['./pop-up-update-profile.component.scss']
})
export class PopUpUpdateProfileComponent implements OnInit {

  operator:Operator;
  constructor(private service:ServicesService,private popUp:MatDialog) { }

  ngOnInit(): void {
    var email:string | null=localStorage.getItem("email");
    this.service.getOperatorById(email).subscribe((data)=>{
      console.log("datita",data)
      this.operator=data;
    });
  }

  public updateInfo(){
    this.popUp.open(UpdateFormProfileComponent,{data:this.operator});
  }

}
