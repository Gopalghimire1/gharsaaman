import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-resetpasschange',
  templateUrl: './resetpasschange.component.html',
  styleUrls: ['./resetpasschange.component.scss']
})
export class ResetpasschangeComponent implements OnInit {
  phone="";
  code="";
  npass="";
  repass="";
  constructor(private client: ApiService, private router: Router) { }
  lock:boolean=false;

  ngOnInit(): void {
  }

  verifyInput(){
    if(this.phone.length!=10){
      alert('Please enter phone number !');
      return false;
    }
    if(this.code==""){
      alert('Please enter verification code !');
      return false;
    }

    if(this.npass==""){
      alert('Please enter new password !');
      return false;
    }

    if(this.npass != this.repass){
      alert('Password does not match !');
      return false;
    }
    return true;
  }

  savePass(){
    if(!this.lock){
      if(this.verifyInput()){
        this.lock=true;
        this.client.post(Setting.apiurl+"auth/resetpasswordPhone",{
          phone:this.phone,
          token:this.code,
          password:this.npass
        }).subscribe((res:any)=>{
          this.lock=false;
          if(res.status){
            this.router.navigate(['/login']);
          }else{
            alert(res.message);
          }
        },
        (err)=>{
          this.lock=false;
          alert('Cannot Reset Password,Connection Lost');
        })
      }
    }
  }

}
