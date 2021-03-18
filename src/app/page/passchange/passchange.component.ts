import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-passchange',
  templateUrl: './passchange.component.html',
  styleUrls: ['./passchange.component.scss']
})
export class PasschangeComponent implements OnInit {
  opass="";
  npass="";
  rpass="";
  constructor(private client:ApiService) { }

  ngOnInit(): void { }

  updatePassword(){
   if(this.opass==""){
     alert('Please enter current password !');
     return;
   }
   if(this.npass==""){
     alert('Please enter new password !')
     return;
   }

   if(this.npass != this.rpass){
     alert('New password does not match !');
     return;
   }
   this.client.postWithAuth(Setting.apiurl+"auth/changepass",{password:this.opass,newpassword:this.npass})
    .subscribe((res:any)=>{
      if(res.status){
          alert('password Changed Sucessfully');
          this.opass="";
          this.npass="";
          this.rpass="";
      }else{
        alert(res.message);
      }
    });
  }




}
