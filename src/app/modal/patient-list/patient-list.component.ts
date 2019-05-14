import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  private patientList

  constructor(public modalRef:BsModalRef, private patientService:PatientService) { }

  ngOnInit() {
    this.patientService.getAll()
      .subscribe(
        (res)=>this.patientList = res,
        (error)=>console.log(error)
      )
  }



}
