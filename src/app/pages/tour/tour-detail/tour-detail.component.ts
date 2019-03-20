import { Tour } from 'src/app/models/Tour';
import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit {

  public tour: Tour;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private tourService: TourService,
  ) { }

  ngOnInit() {
    ($(document) as any).foundation();
    const url = this.route.snapshot.paramMap.get('url');
    this.tourService.getTour(url).then( tour => {
      if(!tour) {
        this.router.navigate(['not-found']);
      }
      this.tour = tour;
    });
  }

}
