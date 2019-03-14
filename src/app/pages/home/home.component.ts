import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  myDate: Date;

  constructor() { }

  checkboxes = document.getElementsByTagName('input');


  ngOnInit() {
    this.myDate = new Date();
  }

  changeBackground() {
    (this.checkboxes[1] as HTMLElement).style.backgroundColor = 'red';
  }

}
