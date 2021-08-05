import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PerformancesService } from '../performances.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss'],
})
export class AddNewPage implements OnInit {
  imgRes: any;
  options: any;

  constructor(private imgPicker: ImagePicker, private performanceService: PerformancesService, private router: Router) { }

  ngOnInit() {
  }

  onAddPerformance(form: NgForm) {

    this.performanceService.addPerformance(form.value.name, form.value.date, form.value.place,
    form.value.price, form.value.actors, form.value.imageUrl).subscribe(res => {
      console.log(res);
    });

    this.router.navigateByUrl('/performances/tabs/repertoire');
    form.reset();
  }

  imagePicker() {
    this.options = {
      width: 200,
      quality: 30,
      outputType: 1
    };

    this.imgRes = [];

    this.imgPicker.getPictures(this.options).then((results) => {
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < results.length; i++) {
        this.imgRes.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (error) => {
      alert(error);
    });
  }

}
