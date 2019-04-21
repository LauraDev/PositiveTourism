import { AlertService } from 'src/app/core/alert.service';
import { BackendService } from 'src/app/core/backend.service';
import { Injectable } from '@angular/core';
import { Tour } from '../models/Tour';

@Injectable()

export class TourService {

  /**
   * @var tours Array<Tour>
   * Contains all tours
   */
  private tours: Array<Tour>;

  constructor(
    private alertService: AlertService,
    private backendService: BackendService,
  ) {
  }

  /**
   * List all tours saved locally
   * If not present, the getFromBackend method is called before hand (GET /tours)
   * @method getAll
   * @returns tours: Tour[]
   */
  public getAll(): Promise<Tour[]> {
    return new Promise<Tour[]>((resolve) => {
      if (this.tours) {
        resolve(this.tours);
      } else {
        this.getFromBackend().then( () => resolve(this.tours) );
      }
    });
  }

  /**
   * Find and return the tour with matching url
   * @method getOne
   * @param url string
   * @returns tour Tour
   */
  public getOne(url: string): Promise<Tour> {
    return new Promise<Tour>((resolve) => {
      if (this.tours) {
        resolve(this.filterByUrl(url));
      } else {
        this.getFromBackend().then( () => resolve(this.filterByUrl(url)) );
      }
    });
  }

  /**
   * Get all tours from backend and save them locally
   * @method getFromBackend
   */
  private getFromBackend(): Promise<any> {
    return new Promise( (resolve) => {
      const path = 'tours?isValidated=true';
      this.backendService.getAllFromMocks()
      // this.backendService.getAll(path)
      .then(tours => {
        this.tours = tours.map(ar => new Tour(ar));
        resolve();
      })
      .catch(() => this.alertService.presentSimpleAlert('An error occurred, please try again later') );
    });
  }

  /**
   * Filter Tours by url
   * @method filterByUrl
   * @param url string
   * @returns tour Tour
   */
  private filterByUrl(url: string): Tour {
    return this.tours.filter(tour => tour.url === url )[0];
  }
}
