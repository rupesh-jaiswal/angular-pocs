import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropAreaComponent } from './drop-area.component';
import { DragDropDirectiveModule } from 'angular4-drag-drop';
import { InjectDragItem } from '../inject-drag-item.directive';
import { POC1Service } from '../poc1.serivce';

describe('DropAreaComponent', () => {
  let component: DropAreaComponent;
  let fixture: ComponentFixture<DropAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropAreaComponent, InjectDragItem ],
      imports: [ DragDropDirectiveModule ],
      providers: [ POC1Service ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should changed dragged Item when dragged item enters droppable area',() => {
    component.dragEnter('Spinner');
    expect(component.draggedItem).toEqual('Spinner');
  })
});
