import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { Variant } from 'src/app/Model/variant';
import { VariantService } from 'src/app/services/variant.service';

@Component({
  selector: 'app-variant-chooser',
  templateUrl: './variant-chooser.component.html',
  styleUrls: ['./variant-chooser.component.scss']
})
export class VariantChooserComponent implements OnInit {
  choosen:number=1;
  @Input()variant:Variant


  @Input()choosenvariants:any
  @Output() selected: EventEmitter<any> = new EventEmitter();
  constructor(public variatnevent:VariantService) {


  }

  ngOnInit(): void {

    // console.log("Emitter added");
    // this.variatnevent.edata.subscribe((data)=>{
    //   console.log("choosing running1",data);
    //   // data.forEach(element => {
    //   //   if(this.variant.id==element.vid){
    //   //     this.choosen=element.opid;
    //   //     console.log("choosing running");
    //   //   }
    //   // });
    // });
    console.log("cv",this.choosenvariants);
    this.choosenvariants.forEach((element:any) => {
          if(this.variant.id==element.vid){
            this.choosen=element.opid;
            console.log("choosing running");
          }
        });
        this.selected.emit({
          vid:this.variant.id,
          opid:this.choosen
        });
  }

  choose(id:any){
    this.choosen=id;
    this.selected.emit({
      vid:this.variant.id,
      opid:this.choosen
    });
  }

  set(variants:any){

  }

}
