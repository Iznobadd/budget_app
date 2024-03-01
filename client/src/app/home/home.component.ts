import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService
      .getUsers('http://localhost:4000/users/all')
      .subscribe((users: User[]) => {
        console.log(users);
      });
  }
}
