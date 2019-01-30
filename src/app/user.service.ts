import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './User';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private http: HttpClient) { }
  private userUrl = 'api/users';
  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }
}
