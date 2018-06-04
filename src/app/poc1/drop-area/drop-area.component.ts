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
  addDropItem(event) {
    this.draggedItem=event
  }
  dropEventMouse(event) {
    // console.log('dropEventMouse');
    // console.log(event);
  }
  dragEnter(event) {

     this.draggedItem=event
  }
  dragLeave() {
    // console.log('dragLeave');
  }
  dragoverMouse(event) {
    // console.log('dragoverMouse');
    // console.log(event);
  }
}
