import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
    pass:string="";
    new:any;
    repeate:any;
  constructor(private client:ApiService) { }

  ngOnInit(): void {

  }

  updatePassword(){
      alert('Please enter current password !');
  }

}
