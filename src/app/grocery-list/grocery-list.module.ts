import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroceryListPage } from './grocery-list.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GroceryListPageRoutingModule } from './grocery-list-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GroceryListPageRoutingModule
  ],
  declarations: [GroceryListPage]
})
export class GroceryListPageModule {}
