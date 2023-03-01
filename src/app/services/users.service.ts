import { Injectable } from '@angular/core';
import {USERS} from "../mock/mock-users";
import {User} from "../user";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private router:Router) { }

  getUsers(): Observable<User[]>{
    const users = of(USERS.filter(item => !item.isAdmin));
    return users;
  }

  getUserById(id:number){
    return of(USERS.filter(item => item.id === id)[0]);
  }

  updateUser(user:any){
    let indexToUpdate = USERS.findIndex(item => item.id === user.id);
    USERS[indexToUpdate] = user;
    this.router.navigate(['users']);
  }

  deleteUser(user:User){
    let index = USERS.indexOf(user, 0);
    USERS.splice(index, 1);
  }
}
