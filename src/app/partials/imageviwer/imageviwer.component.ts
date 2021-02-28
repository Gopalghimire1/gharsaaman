import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageviwer',
  templateUrl: './imageviwer.component.html',
  styleUrls: ['./imageviwer.component.scss']
})
export class ImageviwerComponent implements OnInit {

  @Input() current:string="";
  @Input() images:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  selected(image:any){
    this.current=image;
    console.log(image);
  }
}
