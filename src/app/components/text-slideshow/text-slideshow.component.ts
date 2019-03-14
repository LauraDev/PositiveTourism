import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-text-slideshow',
  templateUrl: './text-slideshow.component.html',
  styleUrls: ['./text-slideshow.component.scss']
})
export class TextSlideshowComponent implements AfterViewInit {
  slideIndex = 1;
  slides = document.getElementsByClassName('mySlides');
  dots = document.getElementsByClassName('dot');

  constructor() {}

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  public plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  public currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  public showSlides(n) {
    let i;
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    for (i = 0; i < this.slides.length; i++) {
      (this.slides[i] as HTMLElement).style.display = 'none';
    }
    for (i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(' active', '');
    }
    (this.slides[this.slideIndex - 1] as HTMLElement).style.display = 'block';
    this.dots[this.slideIndex - 1].className += ' active';
  }

}
