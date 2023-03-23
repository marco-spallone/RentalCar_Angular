import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {CarsComponent} from "./cars/cars.component";
import {UserFormComponent} from "./userform/userForm.component";
import {CarFormComponent} from "./carform/car-form.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {ReservationFormComponent} from "./reservationform/reservation-form.component";
import {LoginComponent} from "./login/login.component";
import {RouteGuard} from "./route-guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent, canActivate: [RouteGuard]},
  {path: 'cars', component: CarsComponent, canActivate: [RouteGuard]},
  {path: 'addUser/:action', component: UserFormComponent, canActivate: [RouteGuard]},
  {path: 'editUser/:userId/:action', component: UserFormComponent, canActivate: [RouteGuard]},
  {path: 'addCar/:action', component: CarFormComponent, canActivate: [RouteGuard]},
  {path: 'editCar/:action/:carId', component: CarFormComponent, canActivate: [RouteGuard]},
  {path: 'reservations/:userId', component: ReservationsComponent, canActivate: [RouteGuard]},
  {path: 'addReservation/:action/:userId', component: ReservationFormComponent, canActivate: [RouteGuard]},
  {path: 'editReservation/:action/:userId/:resId', component: ReservationFormComponent, canActivate: [RouteGuard]},
  {path: 'userProfile/:userId/:action', component: UserFormComponent, canActivate: [RouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
