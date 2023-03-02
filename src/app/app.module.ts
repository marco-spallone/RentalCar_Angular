import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFormComponent } from './userform/userForm.component';
import {FormsModule} from "@angular/forms";
import { CarFormComponent } from './carform/car-form.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ReservationsComponent } from './reservations/reservations.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ReservationFormComponent } from './reservationform/reservation-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ButtonComponent,
    NavbarComponent,
    CarsComponent,
    TableComponent,
    UserFormComponent,
    CarFormComponent,
    PaginationPipe,
    SortPipe,
    ReservationsComponent,
    ReservationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
