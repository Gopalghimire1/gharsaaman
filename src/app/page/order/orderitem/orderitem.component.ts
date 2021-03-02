import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Setting } from 'src/app/Model/setting';

@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.scss']
})
export class OrderitemComponent implements OnInit {
  url=Setting.url;
  detailshow=false;
  detailtext="Show Detail";
  @Input()order:any;

  @Output()detail:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  imageClicked(){
      this.detail.emit(this.order);
  }

  toogleDetail(){
    this.detailshow=!this.detailshow;
    if(this.detailshow){
      this.detailtext="Hide Details";
    }else{
      this.detailtext="Show Details";

    }
  }
}
