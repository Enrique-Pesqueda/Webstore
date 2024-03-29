import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http: HttpClient) { }
  //Connects our web app to the beer data base where we will be pulling beer names.
  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
