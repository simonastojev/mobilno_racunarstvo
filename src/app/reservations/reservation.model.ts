export class Reservation {

  constructor(
    public id: string,
    public person: string,
    public date: Date,
    public place: string,
    public price: number,
    public userId: string) {
  }
}
