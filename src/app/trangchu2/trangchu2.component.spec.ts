import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trangchu2Component } from './trangchu2.component';

describe('Trangchu2Component', () => {
  let component: Trangchu2Component;
  let fixture: ComponentFixture<Trangchu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trangchu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trangchu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
