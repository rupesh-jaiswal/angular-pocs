import { IconMapper } from "./icon-mapper.model";

export class POC2Service {
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
    }

}