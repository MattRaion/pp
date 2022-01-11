import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LonelyislandComponent } from './lonelyisland.component';

describe('LonelyislandComponent', () => {
  let component: LonelyislandComponent;
  let fixture: ComponentFixture<LonelyislandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LonelyislandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LonelyislandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
