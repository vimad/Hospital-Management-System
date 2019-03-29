import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LogingResponceDTO, LoggedUser } from '../services/dtd/loggedUser.dtd';
import { resolveComponentResources } from '@angular/core/src/metadata/resource_loading';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string;
  loginForm: FormGroup;
  loggedInUser:LoggedUser;

  constructor(private fb:FormBuilder, private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['',Validators.required]
    })
  }

  onLogin(){
    let userName = this.loginForm.value.userName;
    let password = this.loginForm.value.password;

    this.loginService.login({username:userName,password:password}).subscribe(
      (response:LogingResponceDTO) =>{
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
        this.loginService.setLoggedInUser(this.loggedInUser);
        this.navigateToUser();
      }
    );
  }

  navigateToUser(){
    if(this.loggedInUser.position == "DOCTOR"){
      this.router.navigate(['/doctor']);
    }
  }

}
