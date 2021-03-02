import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';
import { User } from '../Model/user'
import { Setting } from '../Model/setting';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  prevurl="/user/dashboard";
  redirect:string="/user/dashboard";
  signupredirecturl="/login";
  authenticated:false;
  username:string="";
  user:User;
  token:any="";
  logged=false;
  signupstart:EventEmitter<any>=new EventEmitter<any>();
  signupfailed:EventEmitter<any>=new EventEmitter<any>();
  signupsucceeded:EventEmitter<any>=new EventEmitter<any>();
  authSet:EventEmitter<any>=new EventEmitter<any>();
  constructor(private router: Router,private client :ApiService) {

    if (localStorage.getItem('access_token')){
      this.token=localStorage.getItem('access_token');
      this.client.updateToken(this.token);
        this.client.getWithAuth(Setting.apiurl+'auth/user').
        subscribe((res:any)=>{
          console.log(res);
          this.user=new User();
          this.user.fname=res.acc.fname;
          this.user.lname=res.acc.lname;
          this.user.address=res.acc.address;
          this.user.phone=res.acc.mobile_number;
          this.user.email=res.user.email;
          this.user.image = res.acc.profile_img;
          this.logged=true;
          this.authSet.emit(null);
        });
    }

  }

  logout(){
    this.logged = false;
    // this.user = null;
    localStorage.removeItem('access_token');
  }



  canActivate(ext: ActivatedRouteSnapshot,ate: RouterStateSnapshot  ) {
    if(!this.logged){
      this.redirect=ate.url;
      this.router.navigate(['/login']);
    }
    return this.logged;
  }

  login(data:any){
    this.signupstart.emit(null);
    this.client.post(Setting.apiurl+'auth/loginbyemail',data)
   .subscribe((res:any)=>{
     console.log(res);
     if(res.status){
       localStorage.setItem('access_token',res.token);
       this.token=res.token;
       this.user=new User();
       this.user.fname=res.acc.fname;
       this.user.lname=res.acc.lname;
       this.user.address=res.acc.address;
       this.user.phone=res.acc.mobile_number;
       this.user.email=res.user.email;
       this.user.image = res.acc.profile_img;
       this.client.updateToken(this.token);
       this.logged=true;
       this.signupsucceeded.emit(res);
     }else{
       this.signupfailed.emit(res);
     }
   },
   (err)=>{
     console.log(err);
     this.signupfailed.emit(err);
   });
  }



  signup(data:any){
    this.signupstart.emit(null);
     this.client.post(Setting.apiurl+'auth/signup',data)
    .subscribe((res:any)=>{
      console.log(res);
      if(res.status){
        localStorage.setItem('access_token',res.token);
        this.token=res.token;
        this.user=new User();
        this.user.fname=res.acc.fname;
        this.user.lname=res.acc.lname;
        this.user.address=res.acc.address;
        this.user.phone=res.acc.mobile_number;
        this.user.email=res.user.email;
       this.user.image = res.acc.profile_img;
        this.client.updateToken(this.token);
        this.logged=true;
        this.signupsucceeded.emit(res);
      }else{
        this.signupfailed.emit(res);
      }
    },
    (err)=>{
      console.log(err);
      this.signupfailed.emit(err);
    });

  }
}
