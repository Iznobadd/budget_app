import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    const cloneReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(cloneReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (
          error &&
          error.status === 401 &&
          error.error.message === 'Token JWT expiré'
        ) {
          authService.logout();
        }
        return throwError(() => error);
      })
    );
  }

  return next(req);
};
