import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IconMapper } from '../icon-mapper.model';
import { POC2Service } from '../poc2.service';

@Component({
  selector: 'app-customized-input',
  templateUrl: './customized-input.component.html',
  styleUrls: ['./customized-input.component.css']
})
export class CustomizedInputComponent implements OnInit, OnChanges {
  @Input() type: String;
  icon:IconMapper;
  
  constructor(private poc2Service: POC2Service) { }

  ngOnInit() {
    this.icon=this.poc2Service.icon;
  }

  ngOnChanges() {
    this.icon=this.poc2Service.icon;
  }


}
