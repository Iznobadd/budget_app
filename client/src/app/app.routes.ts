import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/auth.guard';
import { ChooseCategoriesComponent } from './pages/choose-categories/choose-categories.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            component: RegisterComponent,
          },
          {
            path: 'choose',
            component: ChooseCategoriesComponent,
          },
        ],
      },
      {
        path: 'categories',
        children: [
          {
            path: 'list',
            component: ListCategoriesComponent,
            title: 'BudgetApp - Liste des catégories',
          },
        ],
      },
    ],
  },
];
