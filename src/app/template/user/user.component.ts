import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private auth:AuthserviceService) { }
  user:any;
  ngOnInit(): void {
    this.user = this.auth.user;
  }

}
