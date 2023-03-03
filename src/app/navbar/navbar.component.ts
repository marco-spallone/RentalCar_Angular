import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  show:boolean=false;

  menu(){
    console.log('po');
    this.show=!this.show;
  }

}
