import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {User} from '../interfaces/user';
import {USERS} from "../mock/mock-users";
import {CARS} from "../mock/mock-cars";
import {Car} from "../interfaces/car";
import {RESERVATIONS} from "../mock/mock-reservations";
import {Reservation} from "../interfaces/reservation";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const USERS_DB: User[] = USERS;
    const CARS_DB: Car[] = CARS;
    const RESERVATIONS_DB: Reservation[] = RESERVATIONS;
    return {USERS_DB, CARS_DB, RESERVATIONS_DB};
  }

  genId(array: any[]): number {
    return array.length > 0 ? Math.max(...array.map(ent => ent.id)) + 1 : 0;
  }
}
