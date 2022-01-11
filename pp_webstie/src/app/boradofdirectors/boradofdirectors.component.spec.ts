import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoradofdirectorsComponent } from './boradofdirectors.component';

describe('BoradofdirectorsComponent', () => {
  let component: BoradofdirectorsComponent;
  let fixture: ComponentFixture<BoradofdirectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoradofdirectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoradofdirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
