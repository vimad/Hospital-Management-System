import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';
import { LoggedUser } from '../services/dtd/loggedUser.dtd';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';
import { ChannelInfoDTO } from '../services/dtd/channel.dtd';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DrugComponent } from '../modal/drug/drug.component';
import { initialState } from 'ngx-bootstrap/timepicker/reducer/timepicker.reducer';
import { ChannelComponent } from '../modal/channel/channel.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  loggedInDoctor:LoggedUser;
  bsModalRef:BsModalRef;

  constructor(private channelService:ChannelService, private loginService:LoginService,
    private modalService:BsModalService) { }

  ngOnInit() {
    this.loggedInDoctor = JSON.parse(localStorage.getItem('currentUser'));
  }

  logOut(){
    this.loginService.logOut();
  }

  openDrugModal(){
    this.bsModalRef = this.modalService.show(DrugComponent,{
      initialState:{
        parent: this
      }})
  }

}
