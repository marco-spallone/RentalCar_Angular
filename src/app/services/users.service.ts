import {Injectable} from '@angular/core';
import {User} from "../interfaces/user";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginResponse} from "../interfaces/loginResponse";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'http://localhost:8080/rental-car/users';
  private loginUrl = 'http://localhost:8080/rental-car/login';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private router: Router, private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl, this.httpOptions);
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url, this.httpOptions);
  }

  updateUser(user: User): Observable<any> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.delete<User>(url, this.httpOptions);
  }

  login(username: string, password: string) {
    const loginRequest: any = {
      username: username,
      password: password
    }
    return this.http.post<LoginResponse>(this.loginUrl, loginRequest);
  }
}
