import { Injectable } from "@angular/core";
import { Tour } from "../models/Tour";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map, retry, catchError, take } from "rxjs/operators";
import { throwError, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TourService {
  public tours: Array<Tour>;

  constructor(private http: HttpClient) {
  }

  public list() {
    return new Promise<any>((resolve, reject) => {
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

  public getTours(): Promise<Tour[]> {
      return this.http.get('assets/mocks/tours.json')
      .pipe(
        retry(3),
        map( res => res['tours'].map(ar => new Tour(ar)) ),
        catchError(this.handleError)
      )
      .toPromise();
  }

  public getTour(url): Promise<Tour> {
    return this.http.get('assets/mocks/tours.json')
    .pipe(
      retry(3),
      map( res => res['tours'].map(ar => new Tour(ar)).filter(t => t.url === url)[0]),
      catchError(this.handleError)
    )
    .toPromise();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
