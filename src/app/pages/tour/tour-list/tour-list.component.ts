import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';
import { Tour } from 'src/app/class/Tour';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {

  public tours: Array<Tour>;

  constructor(
    private tourService: TourService
  ) {

  }

  ngOnInit() {
    this.getTours();
  }

  private getTours() {
    this.tourService.list().then(
      tours => this.tours = tours
    );
  }
}
