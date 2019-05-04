import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../services/dtd/loggedUser.dtd';

@Component({
  selector: 'app-patient-main',
  templateUrl: './patient-main.component.html',
  styleUrls: ['./patient-main.component.css']
})
export class PatientMainComponent implements OnInit {

  doctorsDetails: Doctor[];
  selectedDoctorId = "1";
  doctorid = 1;

  constructor(private loginService:LoginService, private doctorService:DoctorService) { }

  ngOnInit() {
    this.doctorService.getAll()
      .subscribe(
        (res:Doctor[]) => {
          this.doctorsDetails = res;
          // console.log(this.doctorsDetails);
          
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  change(){
    this.doctorid = parseInt(this.selectedDoctorId);
  }


  logOut(){
    this.loginService.logOut();
  }

}
