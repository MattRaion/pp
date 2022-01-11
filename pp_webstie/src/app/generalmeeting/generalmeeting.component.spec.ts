import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralmeetingComponent } from './generalmeeting.component';

describe('GeneralmeetingComponent', () => {
  let component: GeneralmeetingComponent;
  let fixture: ComponentFixture<GeneralmeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralmeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
