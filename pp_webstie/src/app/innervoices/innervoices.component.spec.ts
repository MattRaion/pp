import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnervoicesComponent } from './innervoices.component';

describe('InnervoicesComponent', () => {
  let component: InnervoicesComponent;
  let fixture: ComponentFixture<InnervoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnervoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnervoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
