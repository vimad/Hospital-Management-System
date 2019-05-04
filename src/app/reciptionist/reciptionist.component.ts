import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { PatientComponent } from '../modal/patient/patient.component';
import { LoginService } from '../services/login.service';
import { ChannelComponent } from '../modal/channel/channel.component';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../services/dtd/loggedUser.dtd';

@Component({
  selector: 'app-reciptionist',
  templateUrl: './reciptionist.component.html',
  styleUrls: ['./reciptionist.component.css']
})
export class ReciptionistComponent implements OnInit {

  modalRef:BsModalRef

  doctorsDetails: Doctor[];

  selectedDoctorId = "-1";
  doctorid = -1;

  constructor(private modalService: BsModalService, private loginService: LoginService,
              private doctorService:DoctorService) { }

  change(){
    this.doctorid = parseInt(this.selectedDoctorId);
  }

  ngOnInit() {
    this.doctorService.getAll()
      .subscribe(
        (res:Doctor[]) => {
          this.doctorsDetails = res;
          console.log(this.doctorsDetails);
          
        },
        (error)=>{
          console.log(error);
        }
      );
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

}
