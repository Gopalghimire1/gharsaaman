import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { Variant } from 'src/app/Model/variant';

@Component({
  selector: 'app-variant-chooser',
  templateUrl: './variant-chooser.component.html',
  styleUrls: ['./variant-chooser.component.scss']
})
export class VariantChooserComponent implements OnInit {
  choosen:number=1;
  @Input()variant:Variant
  @Output() selected: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
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

}
