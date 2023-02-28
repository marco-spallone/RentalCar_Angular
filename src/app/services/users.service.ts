import { Injectable } from '@angular/core';
import {USERS} from "../mock/mock-users";
import {User} from "../user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor() { }

  getUsers(): Observable<User[]>{
    const users = of(USERS);
    return users;
  }

  getUserById(id:number){
    return of(USERS.filter(item => item.id === id)[0]);
  }

  updateUser(user:any){
    let indexToUpdate = USERS.findIndex(item => item.id === user.id);
    USERS[indexToUpdate] = user;
    Object.assign([], USERS);
    console.log(USERS);
  }

  deleteUser(user:any){
    let index = USERS.indexOf(user, 0);
    USERS.splice(index, 1);
  }
}
