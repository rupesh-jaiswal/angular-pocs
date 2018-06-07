import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';
import { DragDropDirectiveModule } from 'angular4-drag-drop';
import { By } from '@angular/platform-browser';

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsComponent ],
      imports: [ DragDropDirectiveModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render all the controls name', () => {
    const complied=fixture.debugElement.nativeElement;
    component.controls.forEach((control, index) => {
      expect(fixture.debugElement.queryAll(By.css('div.controls-div'))[index].nativeElement.textContent.trim()).toEqual(control);
    })
  });
});
