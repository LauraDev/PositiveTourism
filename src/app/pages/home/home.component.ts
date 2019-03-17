import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public labels: Array<string>;
  public myDate: Date;

  constructor() { }

  ngOnInit() {
    this.myDate = new Date();
    this.labels = [
      'Do you need to regenerate yourself on holiday ?',
      'Would you like to discover extraordinary places ?',
      'Do you feel like meeting new people and discovering a new culture ?'
    ]
  }

}
