import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedInputComponent } from './customized-input.component';

describe('CustomizedInputComponent', () => {
  let component: CustomizedInputComponent;
  let fixture: ComponentFixture<CustomizedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedInputComponent ]
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
