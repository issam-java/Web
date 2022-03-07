import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {


    constructor(private authService:AuthService, private router : Router){}

    canActivate(
 route: ActivatedRouteSnapshot,
 state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.isAuth) {
        return true;
      } else {
        return this.router.navigate(['/auth']);
      }

 }


}
