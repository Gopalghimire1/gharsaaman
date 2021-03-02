import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  url=Setting.url;
  orders:any;
  constructor(private client:ApiService) {
    this.client.getWithAuth(Setting.apiurl+"booking/orders").subscribe((res:any)=>{
      this.orders=res;
    });
  }

  ngOnInit(): void {
  }

  detailShown(e:any){
    console.log(e);
  }
}
