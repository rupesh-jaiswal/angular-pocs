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
  startWith=0;
  ngOnInit() {
    this.onGetData();
  }

  onGetData=()=> {
    this.poc3Service.getData(this.startWith).subscribe(
      (resp: {next:boolean, posts: Object}) => {
        this.posts=this.posts.concat(resp.posts);
        this.startWith=this.startWith+20;
        if(!resp.next) {
          this.onStop();
        }
      },
      (error) => {
        if(error.status==404) {
          this.onStop();
        }
      }
    )
  }

  onStop() {
    this.onMore=false;
    this.onGetData=() => {};
  }
}
