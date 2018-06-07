import { TableComponent } from "./table/table.component";
import { FooterComponent } from "./footer/footer.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { TextboxComponent } from "./textbox/textbox.component";
import { ButtonComponent } from "./button/button.component";
import { DividerComponent } from "./divider/divider.component";
import { MaskComponent } from "./mask/mask.component";
import { HeaderControlComponent } from "./header-control/header-control.component";
import { TimeComponent } from "./time/time.component";



export class POC1Service {
    controls= {  
        "Header":HeaderControlComponent, 
        "Table": TableComponent, 
        "Footer": FooterComponent, 
        "Dropdown": DropdownComponent, 
        "Spinner": SpinnerComponent, 
        "TextBox": TextboxComponent, 
        "Button": ButtonComponent, 
        "Divider": DividerComponent, 
        "Mask": MaskComponent,
        "Time": TimeComponent
    };
    selectedControl:String;
    getComponent(element: String) {
        return this.controls[""+ element];
    }
}