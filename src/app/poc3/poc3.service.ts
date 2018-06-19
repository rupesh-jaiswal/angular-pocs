import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Poc3Service {

  constructor(private http: HttpClient) { }

  getData(startWith) {
    return this.http.get(`/api/items?startWith=${startWith}`);
  }
}
