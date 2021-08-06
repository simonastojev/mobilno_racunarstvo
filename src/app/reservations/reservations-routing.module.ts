import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsPage } from './reservations.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ReservationsPage,
    children: [
      {
        path: 'my-res',
        loadChildren: () => import('./my-res/my-res.module').then( m => m.MyResPageModule)
      },
        {
          path: 'add-new-res',
          loadChildren: () => import('./add-new-res/add-new.module').then( m => m.AddNewPageModule)
        },
      ]
  },
  {
    path: '',
    redirectTo: '/reservations/tabs/my-res',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsPageRoutingModule {}
