import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  shown=false;
  constructor() { }

  show(val:boolean){
    this.shown=val;
  }
}
