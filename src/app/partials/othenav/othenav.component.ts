import { Component, Input, OnInit } from '@angular/core';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';

@Component({
  selector: 'app-othenav',
  templateUrl: './othenav.component.html',
  styleUrls: ['./othenav.component.scss'],
})
export class OthenavComponent implements OnInit {
 istop=false;
  @Input()title:string;
  constructor(private scroll:ScrollserviceService) { 

    this.scroll.scrollEvent.subscribe((data)=>{
      console.log(data);
    });
  }

  ngOnInit() {}

}
