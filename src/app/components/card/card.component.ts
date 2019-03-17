import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() teamMember: {
    name: string,
    occupation: string,
    picture: string,
    travelDate: string
  };

  ngOnInit() {
  }

}
