import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { PatientComponent } from '../modal/patient/patient.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-reciptionist',
  templateUrl: './reciptionist.component.html',
  styleUrls: ['./reciptionist.component.css']
})
export class ReciptionistComponent implements OnInit {

  modalRef:BsModalRef

  constructor(private modalService: BsModalService, private loginService: LoginService) { }

  ngOnInit() {
  }

  addPatient(){
    this.modalRef = this.modalService.show(PatientComponent);
  }

  logOut(){
    this.loginService.logOut();
  }

}
