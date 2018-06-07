import { Component, OnInit } from '@angular/core';
import { POC1Service } from '../poc1.serivce';

@Component({
  selector: 'app-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.css']
})
export class DropAreaComponent implements OnInit {
  draggedItem: String;
  constructor(private poc1Service: POC1Service) { }

  ngOnInit() {
  }
  dragEnter(event) {
     this.draggedItem=event
  }
}
