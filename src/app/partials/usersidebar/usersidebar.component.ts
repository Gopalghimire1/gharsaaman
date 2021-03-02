import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.scss']
})
export class UsersidebarComponent implements OnInit {

  constructor(private auth:AuthserviceService, private router:Router) { }
  user:any;
  ngOnInit(): void {
    this.user = this.auth.user;
    console.log(this.auth.user);
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
