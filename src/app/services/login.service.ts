import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggedUser, LogingResponceDTO } from './dtd/loggedUser.dtd';
import { Router, RouteConfigLoadStart } from '@angular/router';
import { map } from 'rxjs/operators';
import { BASE_URL } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { }

  loggedInUser:LoggedUser;

  login(reqBody){
    return this.http.post(`${BASE_URL}/user/login`,reqBody)
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
              channels: response.hospitelStaff.channels,
              accessToken: response.displayUserDTO.authToken.accessToken,
              refreshToken: response.displayUserDTO.authToken.refreshToken
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

  getLoggedInUser(){
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.loggedInUser;
  }

}
