import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataService {
  s: any = '';

  jsonUrl: string = 'https://terareconinterviewtestapi20190106085833.azurewebsites.net/api/Values';

  constructor(private http: HttpClient) {

  }
  public getJSON(): Observable<any> {
    this.s = this.http.get(this.jsonUrl);
    console.log(this.s);
    return this.s;
    //return this.http.get("../assets/AnatomyInfo.json")
  }
}
