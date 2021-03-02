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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, public auth:AuthserviceService, private router:Router, public loader:LoaderService) {
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

  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      phone:[null,[Validators.required,Validators.minLength(10)]],
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null,  Validators.email],
      address: [null,Validators.required],
      password:[null,[Validators.required]],
      repass:[null,Validators.required]
    },
      { validators: this.checkPasswords }
    );
  }

  isNumeric(group: FormGroup){
    const phone = group.get('phone').value;
    return this.isNumber(phone);
  }

  isNumber(value: string | number): boolean
  {
    return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
  }

  register(data:any=null){
    console.log(this.form.valid)
    console.log(this.form.value);
    if(this.form.valid){
      this.auth.signup(this.form.value);
    }else{
      alert('Please Fill All Forms Properly');
    }
  }



  checkPasswords(group: FormGroup) { // here we have the 'passwords' group


    const password = group.get('password').value;
    const confirmPassword = group.get('repass').value;

    return password === confirmPassword ? null : { notSame: true }
  }

  close(){
    var temp=this.auth.signupredirecturl;
    this.auth.signupredirecturl="/login";
    this.router.navigate([temp]);
  }

}
