import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsContactComponent } from './investors-contact.component';

describe('InvestorsContactComponent', () => {
  let component: InvestorsContactComponent;
  let fixture: ComponentFixture<InvestorsContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorsContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
