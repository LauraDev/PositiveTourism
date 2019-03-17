import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTextComponent } from './checkbox-text.component';

describe('CheckboxTextComponent', () => {
  let component: CheckboxTextComponent;
  let fixture: ComponentFixture<CheckboxTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
