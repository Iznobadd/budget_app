import { Component, OnInit, inject } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faPenToSquare,
  faSquare,
  faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss',
})
export class ListCategoriesComponent implements OnInit {
  private categoryService = inject(CategoryService);
  categories: Category[] = [];

  constructor(library: FaIconLibrary) {
    library.addIcons(faSquarePlus, faPenToSquare, faTrashCan);
  }

  ngOnInit(): void {
    this.categoryService.all().subscribe({
      next: (res: any) => {
        this.categories = res;
        console.log(this.categories);
      },
    });
  }

  isDarkColor(color: string): boolean {
    // Convertir la couleur hexadécimale en RGB
    let hex = color.substring(1);
    let rgb = parseInt(hex, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = (rgb >> 0) & 0xff;

    // Calculer la luminosité de la couleur (formule YIQ)
    let luminosity = (r * 299 + g * 587 + b * 114) / 1000;

    // Si la luminosité est inférieure à 128, la couleur est sombre
    return luminosity < 128;
  }
}
