import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedUser } from '../services/dtd/loggedUser.dtd';

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(route:ActivatedRouteSnapshot, status:RouterStateSnapshot){
    let user:LoggedUser = JSON.parse(localStorage.getItem('currentUser'));
    if(user){
        if(user.position == 'PATIENT'){
            return true;
        }
    }
    this.router.navigate(['/']);
    return false;
}
}
