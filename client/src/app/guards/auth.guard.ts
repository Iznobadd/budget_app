import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = (next: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    if (next.url && next.url.length > 0) {
      const currentUrl = next.url[0].path;

      if (currentUrl === 'login' || currentUrl === 'register') {
        router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
