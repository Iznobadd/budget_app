import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const data = this.loginForm.value;
    console.log(data.email);
    this.authService.signIn(data).subscribe({
      next: (res: any) => {
        localStorage.setItem('access_token', res.access_token);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.errorMessage = error.error.message;
          console.log(this.errorMessage);
        } else {
          // REDIRECT ERREUR 500
          console.log(`Erreur serveur`);
        }
      },
      complete: () => this.router.navigate(['/']),
    });
  }
}
