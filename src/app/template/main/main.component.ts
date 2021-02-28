import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  largescreen=true;
  constructor() { }

  ngOnInit(): void {
    this.largescreen=window.innerWidth>768;
  }

}
