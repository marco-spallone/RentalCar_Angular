import { Component } from '@angular/core';
import {usersTableConfig} from "./config/table-config";
import {USERS} from "./mock-users";
import {CARS} from "./mock-cars";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentalCar_Angular';

}
