import { Component, OnInit } from '@angular/core';
import { Poc3Service } from './poc3.service';

@Component({
  selector: 'app-poc3',
  templateUrl: './poc3.component.html',
  styleUrls: ['./poc3.component.css']
})
export class Poc3Component implements OnInit {
  posts:any;
  constructor(private poc3Service: Poc3Service) { }

  ngOnInit() {
    this.onGetData();
  }

  onGetData() {
    this.poc3Service.getData().subscribe(
      (resp) => {
        this.posts=resp;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
