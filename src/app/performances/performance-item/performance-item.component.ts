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
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {}

  openAlert(event) {
    event.stopPropagation();
    //  event.preventDefault();

    this.alertCtrl
      .create({
        header: 'Čuvanje predstave',
        message: 'Da li ste sigurni da želite da sačuvate predstavu?',
        buttons: [
          {
            text: 'Sačuvaj',
            handler: () => {
              console.log('Save.');
            },
          },
          {
            text: 'Otkaži',
            role: 'cancel',
            handler: () => {
              console.log('Do not save.');
            },
          },
        ],
      })
      .then((alert) => alert.present());
  }


}
