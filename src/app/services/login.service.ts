import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggedUser, LogingResponceDTO } from './dtd/loggedUser.dtd';
import { Router, RouteConfigLoadStart } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedInUser:LoggedUser;

  constructor(private http:HttpClient, private router:Router) { }

  login(reqBody){
    return this.http.post("http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/user/login",reqBody)
     .pipe(
       map(
         (response:LogingResponceDTO) => {
            this.loggedInUser = {
              name: response.displayUserDTO.name,
              userId: response.displayUserDTO.userId,
              email: response.displayUserDTO.email,
              userName: response.displayUserDTO.userName,
              profileUrl: response.displayUserDTO.profileUrl,
              expiration: response.displayUserDTO.expiration,
              hospitalStaffId: response.hospitelStaff.hospitalStaffId,
              position: response.hospitelStaff.position,
              channels: response.hospitelStaff.channels
            };
            localStorage.setItem('currentUser',JSON.stringify(this.loggedInUser));
            return this.loggedInUser;
         }
       )
     );
  }

  logOut(){
    localStorage.removeItem('currentUser');
    this.loggedInUser = null;
    this.router.navigate(['/']);
  }

}
