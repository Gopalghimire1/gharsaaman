import { EventEmitter, Injectable } from '@angular/core';
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

  onLoad:EventEmitter<boolean>=new EventEmitter<boolean>();
  loadProduct(){
    if (!this.loaded) {
      this.client.get(Setting.apiurl+'products').subscribe((response:any)=>{
        this.products=response;
        console.log(this.products);
        this.onLoad.emit(true);
      },
      (err)=>{
        this.onLoad.emit(true);

      });

    }
  }

  loadSlider(){
    if (!this.loaded) {
      this.client.get(Setting.apiurl+'sliders').subscribe((response:any)=>{
        this.sliders=response;
        console.log(response);
      });

    }
  }
}
