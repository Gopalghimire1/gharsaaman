import { Component, HostListener, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { convertTypeAcquisitionFromJson } from 'typescript';

@Component({
  selector: 'app-desktopnav',
  templateUrl: './desktopnav.component.html',
  styleUrls: ['./desktopnav.component.scss']
})
export class DesktopnavComponent implements OnInit {
  ontop=false;
  constructor(public service :CategoryService) { }
  largescreen=true;
  ngOnInit(): void {
    console.log("loading categories");
    this.service.getCategory();
    this.largescreen=window.innerWidth>768;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.ontop =window.pageYOffset>215;
    console.log(this.ontop);
  }

}
