import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  constructor(public auth:AuthserviceService, private client:ApiService) { }
  fname:string;
  lname:string;
  phone:any;
  address:string;
  email:string;
  image:string;
  ngOnInit(): void {
    this.fname = this.auth.user.fname;
    this.lname = this.auth.user.lname;
    this.phone = this.auth.user.phone;
    this.address = this.auth.user.address;
    this.email = this.auth.user.email;
  }

  updateDetail(){
    var data = {
      fname:this.fname,
      lname:this.lname,
      phone:this.phone,
      address:this.address,
      email:this.email,
    }

    this.client.postWithAuth(Setting.apiurl+"auth/updateUserInfo",data).subscribe(res=>{
      alert('Info Updated Sucessfully');
      this.auth.user.fname=this.fname;
      this.auth.user.lname=this.lname;
      this.auth.user.address=this.address;
    });
  }


  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      console.log(event.target.result);
      this.auth.user.image=event.target.result;

      let fd=new FormData();
      fd.append('image',file)
      this.client.postFileWithAuth(Setting.apiurl+"auth/ProfileImage",fd)
      .subscribe((res:any)=>{

       });


    });

    reader.readAsDataURL(file);
  }

}
