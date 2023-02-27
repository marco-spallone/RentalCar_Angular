import { Injectable } from '@angular/core';
import {USERS} from "./mock-users";
import {User} from "./user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userToEdit!: any;

  constructor() { }

  getUsers(): Observable<User[]>{
    const users = of(USERS);
    return users;
  }

  setUserToEdit(user:any){
    this.userToEdit=user;
  }

}
