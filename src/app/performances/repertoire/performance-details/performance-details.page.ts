import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Performance } from '../../performance.model';
import { PerformancesService } from '../../performances.service';

@Component({
  selector: 'app-performance-details',
  templateUrl: './performance-details.page.html',
  styleUrls: ['./performance-details.page.scss'],
})
export class PerformanceDetailsPage implements OnInit {
  loadedPerformance: Performance;

  constructor(
    private activatedRoute: ActivatedRoute,
    private performanceService: PerformancesService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('performanceId')){
        // redirect
        this.router.navigate(['/performances']);
        return;
      }
      const performanceId = paramMap.get('performanceId');
      this.loadedPerformance = this.performanceService.getPerformance(performanceId);
    });
  }

  onDeletePerformance(){
    this.alertCtrl.create({header: 'Brisanje',
        message: 'Da li ste sigurni da želite da obrišete ovu predstavu?',
        buttons: [{
          text: 'Odustani',
          role: 'cancel'
        }, {
          text: 'Obriši',
          handler: () => {
            this.performanceService.deletePerformance(this.loadedPerformance.id);
            this.router.navigate(['/performances']);
          }
        }]
      }).then(alertEl => {
        alertEl.present();
      });
  }

}
