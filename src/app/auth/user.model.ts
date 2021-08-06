export class User {
  constructor(public id: string,
    public email: string,
    private _token: string,
    private tokenExpirationDate: Date) {}

  get token() {
    if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
      return null;
    }
    // eslint-disable-next-line no-underscore-dangle
    return this._token;
  }
}
