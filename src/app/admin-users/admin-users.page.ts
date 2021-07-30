import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.page.html',
  styleUrls: ['./admin-users.page.scss'],
})

export class AdminUsersPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  items = [];
  numTimesLeft = 5;

  constructor() {
    this.addMoreItems();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
  }

  addMoreItems(){
    for(let i = 0; i <13; i++){
      this.items.push(i);
    }
  }

}
