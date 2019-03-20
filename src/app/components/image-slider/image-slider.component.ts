import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  public selectedSlideIndex: number;
  @Input() slides: Array<{img: string, alt: string, text: string}>;

  ngOnInit() {
    this.selectedSlideIndex = 0;
  }

  changeImage(slideIndex) {
    const index: number = this.selectedSlideIndex + slideIndex;
    if (index < 0) {
      this.selectedSlideIndex = this.slides.length - 1;
    } else if (index < this.slides.length) {
      this.selectedSlideIndex = index;
    } else {
      this.selectedSlideIndex = 0;
    }
  }

  pickImage(slideIndex) {
    this.selectedSlideIndex = slideIndex;
  }

}
