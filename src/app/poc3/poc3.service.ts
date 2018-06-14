import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Poc3Service {

  constructor(private http: HttpClient) { }

  getData() {
    const headers=new HttpHeaders();
    headers.append('Access-Control-Allow-Origin','true');
    //headers.append('Access-Control-Allow-Origin','');
    return this.http.get('/api/items', {headers: headers});
  }
}
