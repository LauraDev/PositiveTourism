import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSlideshowComponent } from './text-slideshow.component';

describe('TextSlideshowComponent', () => {
  let component: TextSlideshowComponent;
  let fixture: ComponentFixture<TextSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
