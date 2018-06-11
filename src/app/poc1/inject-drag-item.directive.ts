import { Input, ElementRef, Directive, HostListener, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { POC1Service } from "./poc1.serivce";
import { NoComponentComponent } from "./no-component/no-component.component";
@Directive({
    selector:'[injectDragItem]'
})
export class InjectDragItem {
    @Input() item: String;
    element:ElementRef;
    @HostListener('dropEvent') mouseover() {
        let temp=this.poc1Service.getComponent(this.item) || NoComponentComponent;
        let factory = this.resolver.resolveComponentFactory(temp);
        const child = this.viewContainerRef.createComponent(factory);
        this.element.nativeElement.appendChild(child.location.nativeElement);
    }
    constructor(private el: ElementRef, private viewContainerRef: ViewContainerRef,
        private resolver: ComponentFactoryResolver, private poc1Service: POC1Service) {
        this.element=el;
    }
}