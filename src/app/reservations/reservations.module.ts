import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReservationsPageRoutingModule } from './reservations-routing.module';
import { ReservationsPage } from './reservations.page';
//import { ReservationsItemComponent } from './reservations-item/reservations-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationsPageRoutingModule
  ],
  declarations: [ReservationsPage]
})
export class ReservationsPageModule {}
