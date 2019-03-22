import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tour } from '../../shared/models/Tour';
import { TourService } from '../../shared/services/tour.service';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit {

  /**
   * Tour to display
   * @var tour Tour
   */
  public tour: Tour;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private tourService: TourService,
  ) { }

  ngOnInit() {

    ($(document) as any).foundation();

    const url: string = this.route.snapshot.paramMap.get('url');

    // Get the actual tour from it's url or redirect to not-found
    this.tourService.getOne(url).then( tour => {
      if (!tour) {
        this.router.navigate(['not-found']);
      }
      this.tour = tour;
    });
  }

}
