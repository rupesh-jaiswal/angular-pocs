import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poc2Component } from './poc2.component';
import { CustomizedInputComponent } from './customized-input/customized-input.component';
import { POC2Service } from './poc2.service';
import { By } from '@angular/platform-browser';

describe('Poc2Component', () => {
  let component: Poc2Component;
  let fixture: ComponentFixture<Poc2Component>;
  let poc2Service: POC2Service;
  let compiled: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poc2Component, CustomizedInputComponent ],
      providers: [ POC2Service ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    poc2Service = fixture.debugElement.injector.get(POC2Service);
    compiled=fixture.debugElement.nativeElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('type should be set to Email by default', () => {
    expect(component.type).toEqual('Email');
  });

  it('label of select input should be set', () => {
    expect(compiled.querySelector('label').textContent).toEqual('Select Input type:');
  });

  it('correct no of options should be displayed', () => {
    expect(fixture.debugElement.queryAll(By.css('option')).length).toEqual(4);
  });

  it('options are displayed in correct order', () => {
    const renderedOptions=fixture.debugElement.queryAll(By.css('option'));
    let i=0;
    for(let iconmapper of poc2Service.iconmapper) {
      expect(renderedOptions[i++].nativeElement.textContent).toEqual(iconmapper.name);
    }
  });

  it('component type changes when onchange is triggered', () => {
    const selectEL=fixture.debugElement.query(By.css('select'));
    selectEL.triggerEventHandler('change', {target:{value:'Gender'}});
    fixture.detectChanges();
    expect(component.type).toEqual('Gender');
  });

  it('icon in poc2Service is updated when onchange is triggered', () => {
    const selectEL=fixture.debugElement.query(By.css('select'));
    selectEL.triggerEventHandler('change', {target:{value:'Gender'}});
    fixture.detectChanges();
    expect(poc2Service.icon.name).toEqual('Gender');
  });
  
  
  it('setType() of poc2Service is called once when onchange is triggered', () => {
    const setTypeSpy=spyOn(poc2Service, 'setType');
    const selectEL=fixture.debugElement.query(By.css('select'));
    selectEL.triggerEventHandler('change', {target:{value:'Gender'}});
    fixture.detectChanges();
    expect(setTypeSpy.calls.count()).toBe(1, 'spy method was called once');
  });
});
