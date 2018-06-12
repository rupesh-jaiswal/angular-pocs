import { async, TestBed } from '@angular/core/testing';

import { CustomizedInputComponent } from './customized-input.component';
import { POC2Service } from '../poc2.service';

describe('CustomizedInputComponent', () => {
  let component: any;
  let poc2Service: POC2Service;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ POC2Service, CustomizedInputComponent ]
    });
  }));

  beforeEach(() => {
    component=TestBed.get(CustomizedInputComponent);
    poc2Service = TestBed.get(POC2Service);
  });

  it('icon attribute of component is undefined after construction', () => {
    expect(component.icon).toBeUndefined();
  });

  it('icon attribute of component is gets defined when angular calls ngOnInit()', () => {
    poc2Service.icon={name: 'Email', classname: 'envelope'};
    component.ngOnInit();
    expect(component.icon).toBeDefined();
  });

  it('icon atrribute is updated when poc2Service emit some change', () => {
    poc2Service.icon={name: 'Email', classname: 'envelope'};
    component.ngOnInit();
    poc2Service.iconChange.emit({name:'Gender', classname:'gender'});
    expect(component.icon.name).toEqual('Gender');
  });
});
