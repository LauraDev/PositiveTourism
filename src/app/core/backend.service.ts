import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';


/**
 * @const apiUrl string
 * Set depending on the environment
 */
const apiUrl = environment.url;

/**
 * @const token string
 * JWT token
 * Coming from API and saved locally
 */
const token = 'my-auth-token';

/**
 * @const httpOptions HttpHeaders
 * Contains the content-type + Bearer
 */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearer ' + token
  })
};

// const mock = 'assets/mocks/tours.json';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor( private http: HttpClient) { }

  /**
   * Post data to api
   * @method post
   * @param path string (ie: tours)
   * @param body object
   */
  public post(path: string, body: object): Promise<any> {

    return this.http.post(apiUrl + path, body, httpOptions)
    .pipe(
      catchError(this.handleError)
    )
    .toPromise();
  }

  /**
   * Get all from api (ie: GET /tours)
   * @method getAll
   * @param path to use after base url
   * @returns data
   */
  public getAll(path: string): Promise<any> {
    return this.http.get(apiUrl + path)
    .pipe(
      retry(3),
      map( res => res['hydra:member'] ),
      catchError(this.handleError)
    )
    .toPromise();
  }

  /**
   * Handle request error
   * @method handleError
   * @param error: HttpErrorResponse
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
