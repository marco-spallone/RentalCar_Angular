import {Component, OnChanges, OnInit} from '@angular/core';
import {MyTableActionsEnum} from "../table/table.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  navbarCollapsed = true;

  isAdmin:string|null=localStorage.getItem('admin');
  userId!:string;
  urlHome!:string;
  actionEdit:MyTableActionsEnum=MyTableActionsEnum.EDIT;

  constructor() {
  }

  ngOnInit(): void {
    this.userId=localStorage.getItem('userId')!;
    if(this.isAdmin==='true'){
      this.urlHome='/users';
    } else this.urlHome='/reservations/'+this.userId;
  }

  toggle(){
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
