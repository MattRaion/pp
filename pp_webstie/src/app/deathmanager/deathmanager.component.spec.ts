import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathmanagerComponent } from './deathmanager.component';

describe('DeathmanagerComponent', () => {
  let component: DeathmanagerComponent;
  let fixture: ComponentFixture<DeathmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
