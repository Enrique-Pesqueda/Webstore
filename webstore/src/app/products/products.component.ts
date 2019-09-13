import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // Creates the object that will be used to interact with api
  brews: Object;
  constructor(private _http : HttpService) { }
  
  ngOnInit() {
    //Allows the object to grab datea from api;
    this._http.getBeer().subscribe(data=>{
      this.brews = data;
      console.log(this.brews);
  });
  }
}
