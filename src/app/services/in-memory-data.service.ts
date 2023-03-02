import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user';
import {USERS} from "../mock/mock-users";
import {CARS} from "../mock/mock-cars";
import {Car} from "../car";
import {RESERVATIONS} from "../mock/mock-reservations";
import {Reservation} from "../reservation";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const USERS_DB:User[] =  USERS;
    const CARS_DB:Car[] = CARS;
    const RESERVATIONS_DB:Reservation[] = RESERVATIONS;
    return {USERS_DB, CARS_DB, RESERVATIONS_DB};
  }
}
