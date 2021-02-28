import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss']
})
export class SmallComponent implements OnInit {
  @Input()image:string="";
  @Output() selected: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    this.selected.emit(this.image);

  }

}
