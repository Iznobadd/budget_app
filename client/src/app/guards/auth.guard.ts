import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    // const currentUrl = router.url;
    // if (currentUrl === '/login' || currentUrl === '/register') {
    //   router.navigate(['/']);
    //   return false;
    // }
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
