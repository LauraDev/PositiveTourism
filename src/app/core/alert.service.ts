import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  /**
   * @method presentSimpleAlert
   * @param text string
   */
  public presentSimpleAlert(text: string) {
    console.log(text);
  }
}
