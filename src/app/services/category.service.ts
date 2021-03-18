import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiService } from './api.service';
import { Setting } from '../Model/setting';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: any[]=[];
  loaded = false;
  constructor(private client: ApiService) {
    this.getCategory();
  }
  getCategory() {
    if(this.categories.length<=0){

      this.client.get(Setting.apiurl+'categories').subscribe((response:any)=>{

        this.categories=response;
        this.categories=this.categories.slice(0,9);
        console.log(this.categories);
      });
    }

  }
}
