import { Component } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faSquare, faSquarePlus } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss',
})
export class ListCategoriesComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSquarePlus);
  }
}
