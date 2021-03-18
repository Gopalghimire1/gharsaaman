import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  innerwidth:number;
  constructor(public service:HomepageService,private loader:LoaderService) {
    this.service.onLoad.subscribe((ok:boolean)=>{
      this.loader.show(false);
    })
   }

  ngOnInit(): void {
    this.innerwidth=window.innerWidth;
    if(!this.service.loaded){
      this.loader.show(true);
      this.service.loadProduct();
      this.service.loadSlider();
    }
  }

}
