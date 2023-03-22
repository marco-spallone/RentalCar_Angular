import {Component, OnInit} from '@angular/core';
import {MyTableActionsEnum} from "../table/table.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarCollapsed = true;
  isAdmin: string | null = localStorage.getItem('admin');
  userId!: string;
  urlHome!: string;
  actionEdit: MyTableActionsEnum = MyTableActionsEnum.EDIT;

  constructor() {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')!;
    if (this.isAdmin === 'true') {
      this.urlHome = '/users';
    } else this.urlHome = '/reservations/' + this.userId;
    window.addEventListener('storage', event => {
      console.log(event);
      console.log('change');
    })
  }

  toggle() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('admin');
  }

}
