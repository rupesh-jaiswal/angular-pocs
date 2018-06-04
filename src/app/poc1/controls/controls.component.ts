import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  controls: String[]=[
    "Header",
    "Table",
    "Footer",
    "Time",
    "Dropdown",
    "Spinner",
    "TextBox",
    "Button",
    "Divider",
    "Mask"
  ];
  constructor() { }

  ngOnInit() {
  }

  releaseDrop(event) {
   
  }

  startDrag(event) {
    
  }
}
