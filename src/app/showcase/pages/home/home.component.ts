import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  /**
   * List of labels to display next to a checkbox <app-checkbox-text>
   * @var labels Array<string>
   */
  public labels: Array<string>;

  /**
   * List of texts to display inside slides <app-text-slideshow>
   * @var textSlides Array<string>
   */
  public textSlides: Array<string>;

  constructor() { }

  ngOnInit() {
    this.labels = [
      'Would you like to discover extraordinary places ?',
      'Are you interested in learning about cultures and people ?',
      'Do you want to help improve lives along the way ?'
    ];
    this.textSlides = [
      `<strong>Tourism </strong>has long been cited by world leaders <br> as a <strong>
      driver of peace and security</strong> through understanding.`,

      `<strong>Tourism </strong>can create civic pride by encouraging cultivation and sharing
      of local customs, food, traditions and festivals. <br> Personal exchanges between hosts
      and guests goes a long way toward <strong>fostering better cultural understanding</strong>.`
    ];
  }

}
