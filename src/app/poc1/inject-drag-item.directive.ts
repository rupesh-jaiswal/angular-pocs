import { Input, ElementRef, Directive, HostListener, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { Poc2Component } from "../poc2/poc2.component";
import { HeaderComponent } from "./header/header.component";
import { POC1Service } from "./poc1.serivce";
@Directive({
    selector:'[injectDragItem]'
})
export class InjectDragItem {
@Input() item: String;
element:ElementRef;
@HostListener('dropEvent') mouseover(eventData: Event) {
    
    console.log(this.item);
    let temp=this.poc1Service.getComponent(this.item);
    console.log(temp);
    let factory = this.resolver.resolveComponentFactory(temp);
    const child = this.viewContainerRef.createComponent(factory);
    this.element.nativeElement.appendChild(child.location.nativeElement);
    
  }
constructor(private el: ElementRef, private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver, private poc1Service: POC1Service) {
    this.element=el;
}
}