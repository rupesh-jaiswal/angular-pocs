import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedInputComponent } from './customized-input.component';
import { POC2Service } from '../poc2.service';

xdescribe('CustomizedInputComponent', () => {
  let component: CustomizedInputComponent;
  let fixture: ComponentFixture<CustomizedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedInputComponent ],
      providers: [ POC2Service ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
