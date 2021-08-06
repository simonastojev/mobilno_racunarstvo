import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.page.html',
  styleUrls: ['./performances.page.scss'],
})
export class PerformancesPage implements OnInit, OnDestroy {
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
