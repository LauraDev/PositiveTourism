import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public teamMembers: object = [
    {
      name: 'Holly',
      occupation: '???',
      picture: 'assets/images/holly.png',
      travelDate: '???'
    },
    {
      name: 'Laura',
      occupation: 'Web & Mobile Developer',
      picture: 'assets/images/laura.png',
      travelDate: '2014'
    },
    {
      name: 'Lucas',
      occupation: 'Senior Software Engineer',
      picture: 'assets/images/lucas.png',
      travelDate: '???'
    }
  ];

  ngOnInit() {
  }

}
