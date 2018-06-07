import { POC1Service } from './poc1.serivce';
import { HeaderComponent } from '../header/header.component';

describe('POC1Service',() => {
    let poc1Service;
    beforeAll(() =>{
       poc1Service = new POC1Service();        
    })
    it('returns proper component when getComponents function is called',() => {
        for(let e in poc1Service.controls) {
            expect(poc1Service.getComponent(e).toString).toBe(poc1Service.controls[e].toString);
        }
    })
})