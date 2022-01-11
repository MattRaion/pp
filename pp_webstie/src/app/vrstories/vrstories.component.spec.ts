import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrstoriesComponent } from './vrstories.component';

describe('VrstoriesComponent', () => {
  let component: VrstoriesComponent;
  let fixture: ComponentFixture<VrstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
