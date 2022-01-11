import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcapelabComponent } from './excapelab.component';

describe('ExcapelabComponent', () => {
  let component: ExcapelabComponent;
  let fixture: ComponentFixture<ExcapelabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcapelabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcapelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
