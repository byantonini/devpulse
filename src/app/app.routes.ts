import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.Dashboard),
  },
  {
    path: 'kanban',
    loadComponent: () => import('./features/kanban/kanban.component').then((m) => m.Kanban),
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects.component').then((m) => m.Projects),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
