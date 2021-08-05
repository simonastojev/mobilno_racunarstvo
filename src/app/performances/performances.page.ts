import { Component, OnInit } from '@angular/core';
import { PerformancesService } from './performances.service';
import { Performance } from './performance.model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-performances',
  templateUrl: './performances.page.html',
  styleUrls: ['./performances.page.scss'],
})
export class PerformancesPage implements OnInit {
  ngOnInit() {
  }
  /*onAddReservation(form: NgForm) {

    this.reservationService.addPerformance(form.value.name, form.value.date, form.value.place,
      form.value.price, form.value.actors, form.value.imageUrl).subscribe(res => {
      console.log(res);
    });

    this.router.navigateByUrl('/performances/tabs/repertoire');
    form.reset();
  }*/
}
