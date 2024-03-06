import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('http://localhost:4000/users/all').subscribe();
  }
}
