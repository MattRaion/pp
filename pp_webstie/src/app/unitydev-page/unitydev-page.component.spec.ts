import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitydevPageComponent } from './unitydev-page.component';

describe('UnitydevPageComponent', () => {
  let component: UnitydevPageComponent;
  let fixture: ComponentFixture<UnitydevPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitydevPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitydevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
