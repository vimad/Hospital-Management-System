import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { LoggedUser } from '../services/dtd/loggedUser.dtd';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class DoctorAuthGuard implements CanActivate{

    constructor(private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot, status:RouterStateSnapshot){
        let user:LoggedUser = JSON.parse(localStorage.getItem('currentUser'));
        if(user){
            if(user.position == "DOCTOR" || user.position == "ADMIN"){
                return true;
            }
        }

        this.router.navigate(['/']);
        return false;
    }
}