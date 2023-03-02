import { Injectable } from '@angular/core';
import {User} from "../user";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'api/USERS_DB';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private router:Router, private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(id:number): Observable<User>{
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  updateUser(user:User): Observable<any>{
    return this.http.put(this.usersUrl, user, this.httpOptions);
  }

  deleteUser(user:User): Observable<User>{
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.delete<User>(url, this.httpOptions);
  }
}
