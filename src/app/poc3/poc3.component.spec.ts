import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { Poc3Component } from './poc3.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Poc3Service } from './poc3.service';
import { asyncData } from '../../test_util';
describe('Poc3Component', () => {
  let component: Poc3Component;
  let fixture: ComponentFixture<Poc3Component>;
  let poc3Service: Poc3Service;
  let getDataSpy: jasmine.Spy;
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
    poc3Service = fixture.debugElement.injector.get(Poc3Service);    
    fixture.detectChanges();
    getDataSpy=spyOn(poc3Service, 'getData');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('posts should be initialized to an empty array',() => {
    expect(component.posts.length).toBe(0);
  });

  it('onMore should be initialized with true boolean value',() => {
    expect(component.onMore).toBe(true);
  });

  it('startvalue  should be initialized with 0',() => {
    expect(component.startWith).toBe(0);
  });

  it('when onMore is true loading is shown',() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.loadingIndicator').textContent).toContain('Loading...');
  });
  
  it('when onMore is false loading is not shown',() => {
    fixture.componentInstance.onMore=false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.loadingIndicator')).toBeNull();
  });
  
  it('when onMore is false all data is fetched is shown',() => {
    fixture.componentInstance.onMore=false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.data-complete-indicator')).toBeDefined();
    expect(compiled.querySelector('.data-complete-indicator').textContent).toContain('All data is fetched');
  });

  it('getData function is called when once after ngOnInit()', () => {
    getDataSpy.and.returnValue(asyncData({next:false, posts:[]}));
    component.ngOnInit();
    expect(getDataSpy.calls.count()).toBe(1, 'spy method was called once');
  });

  it('when getData responds with next value as true then onMore is true', () => {
    getDataSpy.and.returnValue(asyncData({next:true, posts:[]}));
    component.ngOnInit();
    expect(component.onMore).toBe(true);
  });

  it('when getData responds with data then startWith is incremented by 20', fakeAsync(() => {
    getDataSpy.and.returnValue(asyncData({next:true, posts:[]}));
    let startWith=component.startWith;
    component.ngOnInit();
    tick();
    expect(component.startWith).toBe(startWith+20);
  }));

  it('when getData responds with next value as false then onMore is false', fakeAsync(() => {
    getDataSpy.and.returnValue(asyncData({next:false, posts:[]}));
    component.ngOnInit();
    tick();
    expect(component.onMore).toBe(false);
  }));

  it('when onMore is false loading is not shown',() => {
    fixture.componentInstance.onMore=false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.loadingIndicator')).toBeNull();
  });
});
