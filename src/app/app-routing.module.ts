import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { CarsComponent } from "./cars/cars.component";
import { UserFormComponent } from "./userform/userForm.component";
import {CarFormComponent} from "./carform/car-form.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {ReservationFormComponent} from "./reservationform/reservation-form.component";
import {LoginComponent} from "./login/login.component";
import {SelectCarComponent} from "./selectCar/select-car.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'addUser/:action', component: UserFormComponent },
  { path: 'editUser/:userId/:action', component: UserFormComponent },
  { path: 'addCar/:action', component: CarFormComponent },
  { path: 'editCar/:action/:carId', component: CarFormComponent },
  { path: 'reservations/:userId', component: ReservationsComponent },
  { path: 'addReservation/:action/:userId', component: ReservationFormComponent },
  { path: 'editReservation/:action/:userId/:resId', component: ReservationFormComponent },
  { path: 'selectCar/:startDate/:endDate', component: SelectCarComponent },
  { path: 'selectCar/:startDate/:endDate/:resId', component: SelectCarComponent },
  { path: 'userProfile/:userId/:action', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
