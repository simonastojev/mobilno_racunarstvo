import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';
import {map, switchMap, take, tap} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';

interface ReservationData {
  person: string;
  date: Date;
  place: string;
  price: number;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private _reservations = new BehaviorSubject<Reservation[]>([]);

  private oldReservations: Reservation[] = [
    {
      id: '1',
      person: 'Mika Mikic',
      date: new Date(),
      place: 'JDP',
      price: 500,
      userId: 'ksks'
    },
    {
      id: '2',
      person: 'Laza Zikic',
      date: new Date(),
      place: 'BDP',
      price: 2000,
      userId: 'sks'
    }
  ];
  constructor(private http: HttpClient, private authService: AuthService) { }

  get performances() {
    // eslint-disable-next-line no-underscore-dangle
    return this._reservations.asObservable();
  }

  addReservation(person: string, date: Date, place: string, price: number) {
    let generatedId;
    let newReservation: Reservation;

    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        newReservation = new Reservation(
         null,
          person,
          date,
          place,
          price,
          userId
        );
        return this.http.post<{person: string}>(
          'https://performances-app-default-rtdb.europe-west1.firebasedatabase.app/performances.json', newReservation);
      }),
      take(1),
      switchMap((resData) => {
        generatedId = resData.person;
        // eslint-disable-next-line no-underscore-dangle
        return this._reservations;
      }),
      take(1),
      tap((reservations) => {
        newReservation.id = generatedId;
        // eslint-disable-next-line no-underscore-dangle
        this._reservations.next(reservations.concat(newReservation));
      })
    );

    /*
    return this.http.post<{name: string}>('https://performances-app-default-rtdb.europe-west1.firebasedatabase.app/performances.json', {
      name, date, place, price, actors, imageUrl
    }).pipe(switchMap ((resData) => {
      generatedId = resData.name;
      return this.performances;

    }), take(1), tap((performances) => {
      this._performances.next(performances.concat({
        id: generatedId,
        name,
        date,
        place,
        price,
        actors,
        imageUrl,
      }));
    }));
    */
  }

  getReservations() {
    return this.http
      .get<{[key: string]: ReservationData}>('https://performances-app-default-rtdb.europe-west1.firebasedatabase.app/performances.json')
      .pipe(map((reservationData) => {
          const reservations: Reservation[] = [];

          for(const key in reservationData) {
            if(reservationData.hasOwnProperty(key)) {
              // eslint-disable-next-line max-len
              reservations.push(new Reservation(key, reservationData[key].person, new Date(reservationData[key].date), reservationData[key].place, reservationData[key].price, reservationData[key].userId)
              );
            }
          }
          return reservations;
        }),
        tap(reservations => {
          // eslint-disable-next-line no-underscore-dangle
          this._reservations.next(reservations);
        })
      );
  }

  getAllReservations(){
    return [...this.oldReservations];
    /*uzima sve iz niza rezervacija i smesta u novi niz*/
  }

  getReservation(reservationId: string){
    return {
      ...this.oldReservations.find(reservation => reservation.id === reservationId)
    };
  }

  deleteReservation(reservationId: string){
    /*this.oldReservations = this.oldReservations.filter(reservation => {
      return reservation.id !== reservationId;
    });*/
  }

}
