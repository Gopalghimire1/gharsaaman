import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(public fav:FavService) { }


  ngOnInit(): void {

  }


}
