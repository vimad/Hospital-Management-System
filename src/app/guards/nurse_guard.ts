import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoggedUser } from '../services/dtd/loggedUser.dtd';

@Injectable({
    providedIn:'root'
})
export class NurseAuthGuard implements CanActivate{

    constructor(private router:Router){}

    canActivate(route:ActivatedRouteSnapshot, status:RouterStateSnapshot){
        let user:LoggedUser = JSON.parse(localStorage.getItem('currentUser'));
        if(user){
            if(user.position == 'NURSE'){
                return true;
            }
        }
        this.router.navigate(['/']);
        return false;
    }
}