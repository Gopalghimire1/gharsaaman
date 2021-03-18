import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productgroup',
  templateUrl: './productgroup.component.html',
  styleUrls: ['./productgroup.component.scss']
})
export class ProductgroupComponent implements OnInit {

  @Input()products:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
 trackBy(index: number, name: any): number {
   return name.product_id;
 }
}
