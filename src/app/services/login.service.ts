import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggedUser } from './dtd/loggedUser.dtd';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedInUser:LoggedUser;

  constructor(private http:HttpClient) { }

  login(reqBody){
    return this.http.post("http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/user/login",reqBody);
  }

  getLoggedInUser(){
    return this.loggedInUser;
  }

  setLoggedInUser(user:LoggedUser){
    this.loggedInUser = user;
  }
}
