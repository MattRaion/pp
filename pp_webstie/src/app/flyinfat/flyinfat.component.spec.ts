import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyinfatComponent } from './flyinfat.component';

describe('FlyinfatComponent', () => {
  let component: FlyinfatComponent;
  let fixture: ComponentFixture<FlyinfatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyinfatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyinfatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
