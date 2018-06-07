import { Component, DebugElement, ComponentFactoryResolver } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InjectDragItem } from "./inject-drag-item.directive";
import { By } from "@angular/platform-browser";
import { DragDropDirectiveModule } from "angular4-drag-drop";
import { POC1Service } from "./poc1.serivce";
import { FooterComponent } from "./footer/footer.component";

@Component({
    template:'<div  dropDirective (dropEvent)="addDropItem($event)" injectDragItem item="Footer" ></div>'
})
class TestComponent {
  addDropItem() {

  }
}

xdescribe('Inject-drag-Item directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ InjectDragItem, TestComponent ],
      imports: [ DragDropDirectiveModule ],
      providers:[ POC1Service ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges();

    inputEl = fixture.debugElement.query(By.css('div'));
  });

  it('drop event on div', () => {
    inputEl.triggerEventHandler('dropEvent', "Footer"); 
    fixture.detectChanges();
    console.log('hello');
    fixture.detectChanges();
    console.log(inputEl.nativeElement.innerHTML);
    const component=fixture.componentInstance;
    //let factory = (new ComponentFactoryResolver).resolveComponentFactory(FooterComponent);
    //const child = component.viewContainerRef.createComponent(factory);
    expect(inputEl.nativeElement).toContain('Footer is displayed'); 
  });
})