import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poc1Component } from './poc1.component';
import { Component } from '@angular/core';

@Component({
  selector:'app-drop-area',
  template: ''
})
class DropAreaStubComponent {}
@Component({
  selector:'app-controls',
  template: ''
})
class ControlsStubComponent {}
describe('Poc1Component', () => {
  let component: Poc1Component;
  let fixture: ComponentFixture<Poc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poc1Component, DropAreaStubComponent, ControlsStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in controls area', async(() => {
    const fixture = TestBed.createComponent(Poc1Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.col-md-4').textContent).toContain('Controls area');
  }));
});
