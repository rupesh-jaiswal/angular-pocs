import { IconMapper } from "./icon-mapper.model";
import { EventEmitter } from "@angular/core";

export class POC2Service {
    iconChange= new EventEmitter<IconMapper>();
    icon: IconMapper;
    iconmapper: IconMapper[]=[
        {name:'Email',classname: 'envelope'},
        {name:'Password',classname: 'lock'},
        {name:'Username',classname:'user'},
        {name:'Gender',classname:'user'}
    ];
    
    getIconMapper(name:String) {
        return this.iconmapper.find((icon:IconMapper)=>{
            return icon.name==name
        });
    }
    setType(type) {
        this.icon= this.getIconMapper(type);
        this.iconChange.emit(this.icon);
    }

}