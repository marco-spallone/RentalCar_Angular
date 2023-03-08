import {Component, OnInit} from '@angular/core';
import {MyTableActionsEnum} from "../table/table.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  navbarCollapsed = true;

  isAdmin:string|null=localStorage.getItem('user');
  userId:string|null=localStorage.getItem('userId');
  urlHome!:string;
  actionEdit:MyTableActionsEnum=MyTableActionsEnum.EDIT;


  ngOnInit(): void {
    if(this.isAdmin==='true'){
      this.urlHome='/users';
    } else this.urlHome='/reservations/'+this.userId;
  }

  toggle(){
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
