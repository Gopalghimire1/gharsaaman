import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
 lock=false;
  phone="";
  constructor(private client:ApiService, public router:Router) { }

  ngOnInit(): void { }

  code(){
    // alert(this.phone);
    if(!this.lock){
      if(this.phone.length != 10){
        alert('Please enter propor number !');
        return;
      }
        this.lock=true;
        this.client.post(Setting.apiurl+"auth/forgotpasswordPhone",{"phone":this.phone})
        .subscribe((res)=>{
          this.lock=false;
          this.router.navigate(['/reset']);
        });
    }
    }


}
