import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-categorywise',
  templateUrl: './categorywise.component.html',
  styleUrls: ['./categorywise.component.scss']
})
export class CategorywiseComponent implements OnInit {

  cat_name = localStorage.getItem('cat_name');
  loaded=false;
  id:any;
  constructor(public scroll:ScrollService, private client:ApiService, private location:Location,private route:Router,private currentroute:ActivatedRoute) {
    this.route.routeReuseStrategy.shouldReuseRoute=()=>{
      return false;
    }
   }
  topped = false;
  oldacc = false;
  products:any=[];
  ngOnInit(): void {
    console.log(this.id);
    this.currentroute.queryParams.subscribe(params => {
      this.id=this.currentroute.snapshot.paramMap.get('id');
      console.log(this.id);
      this.client.get(Setting.apiurl+'category/'+this.id).subscribe((res:any)=>{
        this.products = res;
        this.loaded=true;
      },
      (err)=>{
        this.loaded=true;
      });
    });
  }

  back(){
    this.location.back();
  }

}
