import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})

export class ReservationsPage implements OnInit, OnDestroy{

constructor() {
  console.log('constructor');
}

ngOnInit() {
  console.log('ngOnInit');
}

ionViewWillEnter() {
  console.log('ionViewWillEnter');
}

ionViewDidEnter() {
  console.log('ionViewDidEnter');
}

ionViewWillLeave() {
  console.log('ionViewWillLeave');
}

ionViewDidLeave() {
  console.log('ionViewDidLeave');
}

ngOnDestroy() {
  console.log('ngOnDestroy');
}

}
