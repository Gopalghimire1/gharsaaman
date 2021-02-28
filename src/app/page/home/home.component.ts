import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public service:HomepageService) { }

  ngOnInit(): void {
    this.service.loadProduct();
    this.service.loadSlider();
  }

}
