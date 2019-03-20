import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-slideshow',
  templateUrl: './text-slideshow.component.html',
  styleUrls: ['./text-slideshow.component.scss']
})
export class TextSlideshowComponent implements AfterViewInit {

  slideIndex = 0;

  constructor() {}

  @Input() slides: Array<string>;

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  public plusSlides(index) {
    this.showSlides((this.slideIndex += index));
  }

  public currentSlide(index) {
    this.slideIndex = index;
}

  public showSlides(index) {
    if (index < 0) {
      this.slideIndex = this.slides.length - 1;
    } else if (index >= this.slides.length) {
      this.slideIndex = 0;
    } else {
      this.slideIndex = index;
    }
  }

}
