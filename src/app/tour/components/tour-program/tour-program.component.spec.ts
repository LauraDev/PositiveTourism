import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourProgramComponent } from './tour-program.component';

describe('TourProgramComponent', () => {
  let component: TourProgramComponent;
  let fixture: ComponentFixture<TourProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
