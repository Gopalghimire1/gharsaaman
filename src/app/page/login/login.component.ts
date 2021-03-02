import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms'

import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;

  constructor(private formBuilder:FormBuilder, private auth:AuthserviceService, private router:Router, private loader:LoaderService) {
    if(this.auth.logged){
      this.router.navigate(["/user/dashboard"]);
    }
    this.auth.signupstart.subscribe((res)=>{
        this.loader.show(true);
    });
    this.auth.signupsucceeded.subscribe((res)=>{
      this.loader.show(false);
      this.router.navigate([this.auth.redirect]);
    });
    this.auth.signupfailed.subscribe((res)=>{
      alert('Signup Failed Try again');
      this.loader.show(false);
    });
    this.auth.authSet.subscribe((res)=>{
        this.router.navigate(['/user/dashboard']);
    });
  }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: [null,  Validators.email],
      password:[null,[Validators.required]],
    });
  }

  login(data:any=null){
    console.log(this.loginform.valid)
    console.log(this.loginform.value);
    if(this.loginform.valid){
      this.auth.login(this.loginform.value);
    }else{
      alert('Please Fill All Forms Properly');
    }
  }

}
