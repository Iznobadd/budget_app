import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faBriefcaseMedical,
  faCaretUp,
  faChartSimple,
  faLayerGroup,
  faMoneyBillWave,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';
import { JwtToken } from '../../types';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  router = inject(Router);
  email: string = '';

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faWallet,
      faLayerGroup,
      faBriefcaseMedical,
      faMoneyBillWave,
      faChartSimple,
      faCaretUp
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
}
