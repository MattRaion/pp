import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterpopupComponent } from './newsletterpopup.component';

describe('NewsletterpopupComponent', () => {
  let component: NewsletterpopupComponent;
  let fixture: ComponentFixture<NewsletterpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
