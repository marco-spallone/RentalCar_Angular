import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { CarsComponent } from "./cars/cars.component";
import { UserFormComponent } from "./userform/userForm.component";
import {CarFormComponent} from "./carform/car-form.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {ReservationFormComponent} from "./reservationform/reservation-form.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'editUser/:action/:id', component: UserFormComponent },
  { path: 'editCar/:action/:id', component: CarFormComponent },
  { path: 'reservations/:id', component: ReservationsComponent },
  { path: 'editReservation/:action/:userId/:id', component: ReservationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
