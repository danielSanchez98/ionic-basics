import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceItemPage } from './place-item.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceItemPageRoutingModule {}
