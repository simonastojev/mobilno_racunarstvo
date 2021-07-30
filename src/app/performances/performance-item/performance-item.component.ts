import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Performance } from '../performance.model';
import { PerformancesService } from '../performances.service';

@Component({
  selector: 'app-performance-item',
  templateUrl: './performance-item.component.html',
  styleUrls: ['./performance-item.component.scss'],
})
export class PerformanceItemComponent implements OnInit {
  @Input() performanceItem: Performance;
  constructor() { }

  ngOnInit() {}


}
