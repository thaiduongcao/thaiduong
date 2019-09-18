import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trangchu3Component } from './trangchu3.component';

describe('Trangchu3Component', () => {
  let component: Trangchu3Component;
  let fixture: ComponentFixture<Trangchu3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trangchu3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trangchu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
