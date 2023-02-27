import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { CarsComponent } from "./cars/cars.component";
import { UserFormComponent } from "./userform/userForm.component";
import {CarFormComponent} from "./car-form/car-form.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'editUser/:id', component: UserFormComponent },
  { path: 'editCar/:id', component: CarFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
