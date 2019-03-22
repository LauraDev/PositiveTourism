import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../../shared/models/Tour';

@Component({
  selector: 'app-tour-overview',
  templateUrl: './tour-overview.component.html',
  styleUrls: ['./tour-overview.component.scss']
})
export class TourOverviewComponent implements OnInit {

  @Input() tour: Tour;

  constructor() { }

  ngOnInit() {
  }

}
