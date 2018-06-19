import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poc3Component } from './poc3.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Poc3Service } from './poc3.service';

describe('Poc3Component', () => {
  let component: Poc3Component;
  let fixture: ComponentFixture<Poc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poc3Component ],
      imports: [ InfiniteScrollModule, HttpClientModule ],
      providers: [ Poc3Service, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('posts should be initialized to an empty array',() => {
    expect(component.posts.length).toBe(0);
  })
});
