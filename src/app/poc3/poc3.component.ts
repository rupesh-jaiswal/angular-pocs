import { Component, OnInit } from '@angular/core';
import { Poc3Service } from './poc3.service';

@Component({
  selector: 'app-poc3',
  templateUrl: './poc3.component.html',
  styleUrls: ['./poc3.component.css']
})
export class Poc3Component implements OnInit {
  posts=[];
  onMore: boolean = true;
  constructor(private poc3Service: Poc3Service) { }
  i=0;
  ngOnInit() {
    this.onGetData();
  }

  onGetData=()=> {
    this.poc3Service.getData().subscribe(
      (resp) => {
        this.posts=this.posts.concat(resp);
        this.i=this.i+1;
        if(this.i==4) {
          this.onStop();
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }


  onStop() {
    this.onMore=false;
    this.onGetData=() => {};
  }
}
