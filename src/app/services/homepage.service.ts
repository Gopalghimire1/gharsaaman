import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiService } from './api.service';
import { Setting } from '../Model/setting';
@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  products:any[]=[];
  sliders:any[]=[];
  constructor(private client:ApiService) { }
  loaded = false;

  loadProduct(){
    if (!this.loaded) {
      this.client.get(Setting.apiurl+'products').subscribe((response:any)=>{
        this.products=response;
        console.log(this.products);
      });

    }
  }

  loadSlider(){
    if (!this.loaded) {
      this.client.get(Setting.apiurl+'sliders').subscribe((response:any)=>{
        this.sliders=response;
      });

    }
  }
}
