import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceItemPageRoutingModule } from './place-item-routing.module';

import { PlaceItemPage } from './place-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceItemPageRoutingModule
  ],
  declarations: [PlaceItemPage]
})
export class PlaceItemPageModule {}
