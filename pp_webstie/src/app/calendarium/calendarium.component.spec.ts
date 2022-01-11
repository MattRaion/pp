import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendariumComponent } from './calendarium.component';

describe('CalendariumComponent', () => {
  let component: CalendariumComponent;
  let fixture: ComponentFixture<CalendariumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendariumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
