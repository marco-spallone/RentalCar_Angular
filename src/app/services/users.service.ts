import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";
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

  addUser(user:User): Observable<User>{
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  updateUser(user:User): Observable<any>{
    return this.http.put(this.usersUrl, user, this.httpOptions);
  }

  deleteUser(user:User): Observable<User>{
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.delete<User>(url, this.httpOptions);
  }

  login(username:string, password:string): boolean{
    this.getUsers().subscribe(users => {
      users.forEach(user => {
        if(user.username===username && user.password===password){
          localStorage.setItem('user', String(user.isAdmin));
          if(user.isAdmin){
            this.router.navigate(['users']);
          } else {
            this.router.navigate(['reservations', user.id]);
          }
          return true;
        }
        else return false;
      })
    });
    return false;
  }
}
