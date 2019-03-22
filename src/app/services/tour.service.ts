import { Injectable } from '@angular/core';
import { Tour } from '../models/Tour';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const mock = 'assets/mocks/tours.json';
const devUrl = 'https://localhost:8443/tours?isValidated=true';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  /**
   * Contains all tours
   * @var tours
   */
  private tours: Array<Tour>;

  constructor(private http: HttpClient) {
  }

  /**
   * List all tours saved locally
   * If not present, the getTours method is called before hand (GET /tours)
   * @method getAll
   * @returns tours: Tour
   */
  public getAll(): Promise<Tour[]> {
    return new Promise<Tour[]>((resolve, reject) => {
      if (this.tours) {
        resolve(this.tours);
      } else {
        this.getTours().then(tours => {
          this.tours = tours;
          resolve(this.tours);
        });
      }
    });
  }

  /**
   * Find and return the tour with matching url
   * @method getOne
   * @param url: string
   * @returns tour: Tour
   */
  public getOne(url: string): Promise<Tour> {
    return new Promise<Tour>((resolve, reject) => {
      if (this.tours) {
        resolve(this.tours.filter(tour => tour.url === url )[0]);
      } else {
        this.getAll().then(tours => resolve(tours.filter(tour => tour.url === url )[0]));
      }
    });
  }

  /**
   * Get all tours from db: GET /tours
   * @method getTours
   * @returns tour[]: Array<Tour>
   */
  private getTours(): Promise<Tour[]> {
      return this.http.get(devUrl)
      .pipe(
        retry(3),
        map( res => res['hydra:member'].map(ar => new Tour(ar)) ),
        catchError(this.handleError)
      )
      .toPromise();
  }

  /**
   * Handle request error
   * @method handleError
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
