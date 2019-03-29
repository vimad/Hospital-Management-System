import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { LoggedUser } from '../services/dtd/loggedUser.dtd';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  loggedInDoctor:LoggedUser;

  constructor(private doctorService:DoctorService, private loginService:LoginService) { }

  ngOnInit() {
    this.loggedInDoctor = JSON.parse(localStorage.getItem('currentUser'));
  }

  getChannelInfo(){
    
    this.doctorService.getChannelByDoctorId(1)
      .subscribe(
        (response) => {
          console.log(response)
        }
      );
  }

}
