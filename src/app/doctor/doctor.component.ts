import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';
import { LoggedUser } from '../services/dtd/loggedUser.dtd';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';
import { ChannelInfoDTO } from '../services/dtd/channel.dtd';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  loggedInDoctor:LoggedUser;

  constructor(private channelService:ChannelService, private loginService:LoginService) { }

  ngOnInit() {
    this.loggedInDoctor = JSON.parse(localStorage.getItem('currentUser'));
  }

  logOut(){
    this.loginService.logOut();
  }

}
