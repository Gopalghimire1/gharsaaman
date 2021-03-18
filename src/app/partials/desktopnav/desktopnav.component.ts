import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { convertTypeAcquisitionFromJson } from 'typescript';

@Component({
  selector: 'app-desktopnav',
  templateUrl: './desktopnav.component.html',
  styleUrls: ['./desktopnav.component.scss']
})
export class DesktopnavComponent implements OnInit {
  ontop=false;
  constructor(public service :CategoryService , private auth:AuthserviceService,private router:Router) { }
  largescreen=true;
  user:any;
  href:any;
  active=false;
  ngOnInit(): void {
    console.log("loading categories");
    this.service.getCategory();
    this.largescreen=window.innerWidth>768;

    if(this.auth.logged != false){
      this.user = this.auth.user.fname;
    }else{
      this.user ="Guest";
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.ontop =window.pageYOffset>215;
    console.log(this.ontop);
  }

}
