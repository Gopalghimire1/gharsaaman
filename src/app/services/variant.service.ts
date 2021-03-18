import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariantService {
  public selvariant:any;
  public edata:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  setVariant(_v:any){
    this.selvariant=_v;
    console.log('variant set',_v);
    this.edata.emit(this.selvariant);
    console.log('data emitted',this.selvariant);
  }
}
