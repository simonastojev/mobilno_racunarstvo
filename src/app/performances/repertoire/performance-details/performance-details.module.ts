import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformanceDetailsPageRoutingModule } from './performance-details-routing.module';

import { PerformanceDetailsPage } from './performance-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformanceDetailsPageRoutingModule
  ],
  declarations: [PerformanceDetailsPage]
})
export class PerformanceDetailsPageModule {}
