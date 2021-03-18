import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { AuthserviceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private auth:AuthserviceService) { }
  user:any;
  baseurl = Setting.url;
  largescreen=true;

  ngOnInit(): void {
    this.user = this.auth.user;
    this.largescreen=window.innerWidth>768;

  }

}
