import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qty',
  templateUrl: './qty.component.html',
  styleUrls: ['./qty.component.scss']
})
export class QtyComponent implements OnInit {

  constructor() { }
  qty=1;
  @Input()max:number
  ngOnInit(): void {
  }

  addQty(num:any){
    this.qty+=num;
    if(this.qty<1){
      this.qty=1;
    }

    if(this.qty>this.max){
      this.qty=this.max;
    }
  }

}
