import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private client:ApiService, private location:Location) { }
  key:string;
  products:any[]=[];
  loaded = false;
  searchkey:string[]=[];
  ngOnInit(): void {
    var history = localStorage.getItem('search_history');
    console.log(history);
    if(history !=null && history!=undefined){
      this.searchkey=JSON.parse(history).slice(0,13);
    }
  }


  search(){
    this.client.post(Setting.apiurl+'search',{keyword:this.key}).subscribe((res:any)=>{
      this.products = res;
      this.loaded=true;
      if(this.searchkey.find(o=>o==this.key)==undefined){

        this.searchkey.push(this.key);
      }
      localStorage.setItem('search_history',JSON.stringify(this.searchkey));
    });
  }

  back(){
    this.location.back();
  }

  removeHistory(){
    // alert('hello');
    this.searchkey=[];
    localStorage.removeItem('search_history');
  }

  searchByHistory(ele:any){
    this.key = ele;
  }


}
