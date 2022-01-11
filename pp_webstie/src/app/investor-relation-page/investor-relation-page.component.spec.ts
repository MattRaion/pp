import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorRelationPageComponent } from './investor-relation-page.component';

describe('InvestorRelationPageComponent', () => {
  let component: InvestorRelationPageComponent;
  let fixture: ComponentFixture<InvestorRelationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorRelationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorRelationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
