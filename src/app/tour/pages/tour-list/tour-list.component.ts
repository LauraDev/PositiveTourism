import { Component, OnInit } from '@angular/core';
import { TourService } from '../../shared/services/tour.service';
import { Tour } from '../../shared/models/Tour';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {

  /**
   * List all tours
   * @var tours Array<Tour>
   */
  public tours: Array<Tour>;

  constructor(private tourService: TourService) {}

  ngOnInit() {
    this.tourService.getAll().then(
      tours => this.tours = tours
    );
  }
}
