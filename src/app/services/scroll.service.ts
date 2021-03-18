import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  top:number=0;
  constructor() { }
  update(_top:number){
    this.top=_top;
  }
}
