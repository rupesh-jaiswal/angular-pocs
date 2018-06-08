import { Component, DebugElement, ComponentFactoryResolver, ViewChild, NgModule } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InjectDragItem } from "./inject-drag-item.directive";
import { By } from "@angular/platform-browser";
import { DragDropDirectiveModule } from "angular4-drag-drop";
import { POC1Service } from "./poc1.serivce";
import { FooterComponent } from "./footer/footer.component";
import { NoComponentComponent } from "./no-component/no-component.component";

@Component({
    template:'<div  dropDirective (dropEvent)="addDropItem($event)" injectDragItem item="Footer" ></div>'
})
class TestComponentProperInput {
  @ViewChild(InjectDragItem) directive: InjectDragItem;
  addDropItem() {

  }
}

@Component({
  template:'<div  dropDirective (dropEvent)="addDropItem($event)" injectDragItem item="image" ></div>'
})
class TestComponentWrongInput {
@ViewChild(InjectDragItem) directive: InjectDragItem;
addDropItem() {

}
}

@NgModule({
  declarations: [ InjectDragItem,
    TestComponentProperInput, 
    TestComponentWrongInput, 
    FooterComponent,
    NoComponentComponent ],
  imports: [ DragDropDirectiveModule ],
  providers:[ POC1Service ],
  entryComponents: [ FooterComponent,
    NoComponentComponent
  ]
})
class FakeTestingModule {}

describe('Inject-drag-Item directive', () => {
  describe('when dragged component exists', () => {
    let fixture: ComponentFixture<TestComponentProperInput>;
    let inputEl: DebugElement;
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        imports: [ FakeTestingModule ]
      })
      .createComponent(TestComponentProperInput);
      fixture.detectChanges();
      inputEl = fixture.debugElement.query(By.css('div'));
    });

    it('drop event on div with proper component name', () => {
      const component=fixture.componentInstance;
      component.directive.mouseover();
      expect(inputEl.nativeElement.querySelector('p').textContent).toEqual('Footer is displayed'); 
    });
  });
  describe('when dragged component doesnt exist', () => {
    let fixture: ComponentFixture<TestComponentWrongInput>;
    let inputEl: DebugElement;
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        imports: [ FakeTestingModule ]
      })
      .createComponent(TestComponentWrongInput);
      fixture.detectChanges();
      inputEl = fixture.debugElement.query(By.css('div'));
    });
  
    it('drop event on div with proper component name', () => {
      const component=fixture.componentInstance;
      component.directive.mouseover();
      expect(inputEl.nativeElement.querySelector('p').textContent.trim()).toEqual('no-component works!'); 
    });
  });
});


describe('when dragged component doesnt exist', () => {
  let fixture: ComponentFixture<TestComponentWrongInput>;
  let inputEl: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ FakeTestingModule ]
    })
    .createComponent(TestComponentWrongInput);
    fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('div'));
  });

  it('drop event on div with proper component name', () => {
    const component=fixture.componentInstance;
    component.directive.mouseover();
    expect(inputEl.nativeElement.querySelector('p').textContent.trim()).toEqual('no-component works!'); 
  });
});