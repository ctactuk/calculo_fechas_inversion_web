import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseConfig } from 'src/core/confg';
import { Token, UserLogin } from '../models/app.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_HOST = BaseConfig.API_HOST;
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  private token;
  public isAuthenticated: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    this.token = localStorage.getItem('token');
    this.setAuthenticated(!!this.token);
  }

  login(userLogin: UserLogin) {
    return this.http.post<Token>(this.API_HOST + 'token/', {
      username: userLogin.username,
      password: userLogin.password,
    });
  }

  setToken(token: any): void {
    this.token = token;
    localStorage.setItem('token', token); // Store the token in local storage
  }

  getToken() {
    return this.token;
  }

  setAuthenticated(value: boolean): void {
    this.isAuthenticatedSubject.next(value);
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove the token from local storage
    this.setToken(null);
    this.setAuthenticated(false);
  }
}
