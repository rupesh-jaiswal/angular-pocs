import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poc3Component } from './poc3.component';

describe('Poc3Component', () => {
  let component: Poc3Component;
  let fixture: ComponentFixture<Poc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
