import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Poc1Component } from './poc1/poc1.component';
import { Poc2Component } from './poc2/poc2.component';
import { AppRoutingModule } from './app-routing.module';
import { DragDropDirectiveModule} from "angular4-drag-drop";
import { ControlsComponent } from './poc1/controls/controls.component';
import { DropAreaComponent } from './poc1/drop-area/drop-area.component';
import { InjectDragItem } from './poc1/inject-drag-item.directive';
import { POC1Service } from './poc1/poc1.serivce';
import { ButtonComponent } from './poc1/button/button.component';
import { TextboxComponent } from './poc1/textbox/textbox.component';
import { DropdownComponent } from './poc1/dropdown/dropdown.component';
import { TimeComponent } from './poc1/time/time.component';
import { DividerComponent } from './poc1/divider/divider.component';
import { MaskComponent } from './poc1/mask/mask.component';
import { FooterComponent } from './poc1/footer/footer.component';
import { TableComponent } from './poc1/table/table.component';
import { SpinnerComponent } from './poc1/spinner/spinner.component';
import { HeaderControlComponent } from './poc1/header-control/header-control.component';
import { NoComponentComponent } from './poc1/no-component/no-component.component';
import { CustomizedInputComponent } from './poc2/customized-input/customized-input.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Poc1Component,
    Poc2Component,
    ControlsComponent,
    DropAreaComponent,
    InjectDragItem,
    ButtonComponent,
    TextboxComponent,
    DropdownComponent,
    TimeComponent,
    DividerComponent,
    MaskComponent,
    FooterComponent,
    TableComponent,
    SpinnerComponent,
    HeaderControlComponent,
    NoComponentComponent,
    CustomizedInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropDirectiveModule,
    FormsModule,
  ],
  providers:[POC1Service],
  bootstrap: [AppComponent],
  entryComponents:[DropdownComponent,
     SpinnerComponent,
     TableComponent,
     FooterComponent,
     TimeComponent,
     DividerComponent,
    TextboxComponent,
    MaskComponent,
    HeaderControlComponent,
    ButtonComponent]
})
export class AppModule { }
