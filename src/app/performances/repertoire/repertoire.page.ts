import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Performance } from '../performance.model';
import { PerformancesService } from '../performances.service';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.page.html',
  styleUrls: ['./repertoire.page.scss'],
})
export class RepertoirePage implements OnInit {


  performances: Performance[];
  private performancesSub: Subscription;

  constructor(private PerformancesService: PerformancesService) { }

  ngOnInit() {
    this.performancesSub = this.PerformancesService.performances.subscribe(performances => {
      this.performances = performances;
    });

  }

  ionViewWillEnter() {
    this.PerformancesService.getPerformances().subscribe(performances => {

    });
  }

}
