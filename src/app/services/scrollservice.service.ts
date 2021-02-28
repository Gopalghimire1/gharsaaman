import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollserviceService {
  top:0;
  scrollEvent=new EventEmitter<any>();
  constructor() { }

  set(_top:any){
    this.top=_top;
    this.scrollEvent.emit(this.top);
    console.log("from scroll service",this.top)
  }
}
