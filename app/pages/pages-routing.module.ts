import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
      path: '',
      component: PagesComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
