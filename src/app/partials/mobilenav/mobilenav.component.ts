import { Component, HostListener, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss']
})
export class MobilenavComponent implements OnInit {
  verticalOffset:number;
  constructor(public cat:CategoryService) { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {
    this.verticalOffset = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop || 0;


  }

}
