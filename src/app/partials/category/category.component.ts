import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(public client:ApiService) { }
  categories:any[]=[];
  baseurl = Setting.url;
  ngOnInit(): void {
    this.client.get(Setting.apiurl+'categories').subscribe((res:any)=>{
      this.categories = res;
    });
  }

  saveCatName(name:any){
    localStorage.setItem('cat_name',name);
  }

}
