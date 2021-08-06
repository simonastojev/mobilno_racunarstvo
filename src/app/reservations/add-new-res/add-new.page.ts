import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReservationsService} from '../reservations.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss'],
})
export class AddNewPage implements OnInit, OnDestroy {

  constructor(private reservationService: ReservationsService, private router: Router) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
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

  onAddReservation(form: NgForm) {
    this.reservationService.addReservation(form.value.person, form.value.date, form.value.place,
      form.value.price).subscribe(res => {
      console.log(res);
    });
    this.router.navigateByUrl('/reservations/tabs/my-res');
    form.reset();
  }
}
