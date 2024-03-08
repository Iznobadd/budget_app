import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faArrowRightFromBracket,
  faBriefcaseMedical,
  faCaretUp,
  faChartSimple,
  faLayerGroup,
  faMoneyBillWave,
  faTableList,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';
import { JwtToken } from '../../types';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  router = inject(Router);
  email: string = '';
  authService = inject(AuthService);

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faWallet,
      faLayerGroup,
      faBriefcaseMedical,
      faMoneyBillWave,
      faChartSimple,
      faCaretUp,
      faTableList,
      faArrowRightFromBracket
    );
  }

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      const decoded_token: JwtToken = jwtDecode(token);

      const { email } = decoded_token;
      this.email = email;
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    this.authService.logout();
  }
}
