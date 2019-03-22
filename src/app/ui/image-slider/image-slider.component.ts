import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  public selectedSlideIndex: number;
  @Input() slides: Array<{img: string, alt: string, text: string}>;

  constructor() { }

  ngOnInit() {
    this.selectedSlideIndex = 0;
  }

  /**
   * Change actual image on prev / next click
   * @method changeImage
   * @param slideIndex number
   */
  changeImage(slideIndex: number) {
    const index: number = this.selectedSlideIndex + slideIndex;
    if (index < 0) {
      this.selectedSlideIndex = this.slides.length - 1;
    } else if (index < this.slides.length) {
      this.selectedSlideIndex = index;
    } else {
      this.selectedSlideIndex = 0;
    }
  }

  /**
   * Change actual image on a thumbnail click
   * @method pickImage
   * @param slideIndex number
   */
  pickImage(slideIndex: number) {
    this.selectedSlideIndex = slideIndex;
  }

}
