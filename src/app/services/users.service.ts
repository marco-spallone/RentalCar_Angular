import { Injectable } from '@angular/core';
import {USERS} from "../mock/mock-users";
import {User} from "../user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user!:User;

  constructor() { }

  getUsers(): Observable<User[]>{
    const users = of(USERS);
    return users;
  }

  getUserById(users:any[], id:number){
    this.user=users.filter(item => item.id === id)[0];
  }

  updateUser(users:any[], user:any): any[]{
    let indexToUpdate = users.findIndex(item => item.id === user.id);
    users[indexToUpdate] = user;
    users = Object.assign([], users);
    console.log(users);
    return users;
  }

  deleteUser(users:any[], user:any): any[]{
    let index = users.indexOf(user, 0);
    users.splice(index, 1);
    return users;
  }
}
