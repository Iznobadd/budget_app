import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserLogin } from '../types';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  signIn(userData: UserLogin) {
    return this.http.post('http://localhost:4000/auth/login', userData).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  signUp(userData: UserLogin) {
    return this.http.post('http://localhost:4000/auth/signup', userData).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    return this.router.navigate(['/login']);
  }

  getToken() {
    const token = localStorage.getItem('access_token');
    return token ? token : null;
  }
}
