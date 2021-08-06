import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformancesPage } from './performances.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PerformancesPage,
    children: [
      {
        path: 'repertoire',
        loadChildren: () => import('./repertoire/repertoire.module').then( m => m.RepertoirePageModule)
      },
      {
        path: 'add-new',
        loadChildren: () => import('./add-new/add-new.module').then( m => m.AddNewPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/performances/tabs/repertoire',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformancesPageRoutingModule {}
