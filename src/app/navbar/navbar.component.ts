import {Component, OnInit} from '@angular/core';
import {MyTableActionsEnum} from "../table/table.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isAdmin:string|null=localStorage.getItem('user');
  userId:string|null=localStorage.getItem('userId');
  url1!:string;
  actionEdit:MyTableActionsEnum=MyTableActionsEnum.EDIT;

  show:boolean=false;

  ngOnInit(): void {
    if(this.isAdmin==='true'){
      this.url1='/users';
    } else this.url1='/reservations/'+this.userId;
  }



  menu(){
    this.show=!this.show;
  }

}
