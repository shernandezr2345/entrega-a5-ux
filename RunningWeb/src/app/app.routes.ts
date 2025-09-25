import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/alerts',
    pathMatch: 'full'
  },
  {
    path: 'alerts',
    loadComponent: () => import('./components/alertas/alerts-list.component').then(m => m.AlertsListComponent)
  },
  {
    path: 'crear-alerta',
    loadComponent: () => import('./components/alertas/crear-alerta.component').then(m => m.CrearAlertaComponent)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./components/perfil/perfil.component').then(m => m.PerfilComponent)
  },
  {
    path: 'metas',
    loadComponent: () => import('./components/metas/metas.component').then(m => m.MetasComponent)
  },
  {
    path: 'crear-meta',
    loadComponent: () => import('./components/crear-meta/crear-meta.component').then(m => m.CrearMetaComponent)
  },
  {
    path: 'meta-sugerida/:id',
    loadComponent: () => import('./components/meta-sugerida/meta-sugerida.component').then(m => m.MetaSugeridaComponent)
  }
];
