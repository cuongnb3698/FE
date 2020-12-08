import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoaitudienService {
  Controller = 'loaitudien'
  constructor(private http : HttpClient) { }

  GetPage(search){
    return this.http.get(environment.ApiUrl + this.Controller, {
      headers: {
        'Content-Type': 'application/json',
      },
      params:search,
    });
  }

}
