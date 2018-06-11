import { Component, OnInit } from '@angular/core';
import { POC2Service } from './poc2.service';

@Component({
  selector: 'app-poc2',
  templateUrl: './poc2.component.html',
  styleUrls: ['./poc2.component.css'],
  providers: [ POC2Service ]
})
export class Poc2Component implements OnInit {

  constructor(private poc2Service: POC2Service) { }
  type:String
  ngOnInit() {
    this.type='Email';
    this.poc2Service.setType('Email');
  }
  onChangeType(event) {
    this.type=event.target.value;
    this.poc2Service.setType(event.target.value);
  }

}
