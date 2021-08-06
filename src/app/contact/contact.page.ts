import {Component, OnDestroy, OnInit, ElementRef, ViewChild} from '@angular/core';
declare let google;

@Component({
  selector: 'app-fun-facts',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, OnDestroy {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(private geolocation: Geolocation) {
    console.log('constructor');
  }

  ngOnInit() {
    this.displayGoogleMap();
    console.log('ngOnInit');
  }
  displayGoogleMap() {
    const latLng = new google.maps.LatLng(28.6117993, 77.2194934);

    const mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
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
