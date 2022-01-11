import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenshiComponent } from './datenshi.component';

describe('DatenshiComponent', () => {
  let component: DatenshiComponent;
  let fixture: ComponentFixture<DatenshiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatenshiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
