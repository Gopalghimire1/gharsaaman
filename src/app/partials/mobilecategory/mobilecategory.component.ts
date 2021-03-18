import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-mobilecategory',
  templateUrl: './mobilecategory.component.html',
  styleUrls: ['./mobilecategory.component.scss']
})
export class MobilecategoryComponent implements OnInit {

  constructor(public cat:CategoryService) { }

  ngOnInit(): void {
  }

  saveCatName(name:any){
    localStorage.setItem('cat_name',name);
  }

}
