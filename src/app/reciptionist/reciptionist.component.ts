import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { PatientComponent } from '../modal/patient/patient.component';
import { LoginService } from '../services/login.service';
import { ChannelComponent } from '../modal/channel/channel.component';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../services/dtd/loggedUser.dtd';
import { PatientListComponent } from '../modal/patient-list/patient-list.component';

@Component({
  selector: 'app-reciptionist',
  templateUrl: './reciptionist.component.html',
  styleUrls: ['./reciptionist.component.css']
})
export class ReciptionistComponent implements OnInit {

  modalRef:BsModalRef

  doctorsDetails: Doctor[];
  selectedDoctor: Doctor;

  selectedDoctorId = "-1";
  doctorid = -1;

  constructor(private modalService: BsModalService, private loginService: LoginService,
              private doctorService:DoctorService) { }

  change(){
    this.doctorid = parseInt(this.selectedDoctorId);
    this.selectedDoctor = this.doctorsDetails.find(item=> item.doctorid === this.doctorid);
  }

  ngOnInit() {
    this.doctorService.getAll()
      .subscribe(
        (res:Doctor[]) => {
          this.doctorsDetails = res;
          this.selectedDoctor = this.doctorsDetails[0];
          this.selectedDoctorId = this.selectedDoctor.doctorid.toString();
          this.doctorid = this.selectedDoctor.doctorid;
          // console.log(this.doctorsDetails);
          
        },
        (error)=>{
          console.log(error);
        }
      );
    
    console.log(this.selectedDoctor);
  }

  addPatient(){
    this.modalRef = this.modalService.show(PatientComponent);
  }

  logOut(){
    this.loginService.logOut();
  }

  openChannelModal(){
    this.modalRef = this.modalService.show(ChannelComponent,{
      initialState:{
        parent: this
      }})
  }

  openPatientModal(){
    this.modalRef = this.modalService.show(PatientListComponent);
  }

}
