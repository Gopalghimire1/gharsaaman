import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthserviceService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdService {

  constructor(private auth:AuthserviceService,private router:Router) { }

  canActivate(ext: ActivatedRouteSnapshot,ate: RouterStateSnapshot  ) {
    if(!this.auth.logged){
      this.auth.redirect=ate.url;
      this.router.navigate(['/login']);
    }
    return this.auth.logged;
  }
}
