import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {CarsComponent} from "./cars/cars.component";
import {UserFormComponent} from "./userform/userForm.component";
import {CarFormComponent} from "./carform/car-form.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {ReservationFormComponent} from "./reservationform/reservation-form.component";
import {LoginComponent} from "./login/login.component";
import {canActivateTeam} from "./route-guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent, canActivate: [canActivateTeam]},
  {path: 'cars', component: CarsComponent, canActivate: [canActivateTeam]},
  {path: 'addUser/:action', component: UserFormComponent, canActivate: [canActivateTeam]},
  {path: 'editUser/:userId/:action', component: UserFormComponent, canActivate: [canActivateTeam]},
  {path: 'addCar/:action', component: CarFormComponent, canActivate: [canActivateTeam]},
  {path: 'editCar/:action/:carId', component: CarFormComponent, canActivate: [canActivateTeam]},
  {path: 'reservations/:userId', component: ReservationsComponent, canActivate: [canActivateTeam]},
  {path: 'addReservation/:action/:userId', component: ReservationFormComponent, canActivate: [canActivateTeam]},
  {path: 'editReservation/:action/:userId/:resId', component: ReservationFormComponent, canActivate: [canActivateTeam]},
  {path: 'userProfile/:userId/:action', component: UserFormComponent, canActivate: [canActivateTeam]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
