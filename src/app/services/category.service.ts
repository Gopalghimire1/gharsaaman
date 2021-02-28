import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: any[]=[];
  loaded = false;
  constructor(private client: HttpClient) {
  }
  getCategory() {
    if (!this.loaded) {
      this.client.get('https://meroemart.com/api/categories').subscribe((response:any)=>{

        this.categories=response;
        this.categories=this.categories.slice(0,10);
        console.log(this.categories);
      });

    }
  }
}
