import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  /**
   * Array containing details about each team member
   * @var teamMember Array<object>
   */
  public teamMembers: Array<object> = [
    {
      name: 'Holly',
      occupation: 'Politics and International Relations student',
      picture: 'assets/images/holly.png',
      travelDate: '2010'
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
      travelDate: '2010'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
