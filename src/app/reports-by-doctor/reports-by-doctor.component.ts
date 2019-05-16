import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-reports-by-doctor',
  templateUrl: './reports-by-doctor.component.html',
  styleUrls: ['./reports-by-doctor.component.css']
})
export class ReportsByDoctorComponent implements OnInit {

  private reportDetails;

  private patients = [];

  constructor(private reportServive:ReportService, private patientService:PatientService) { }

  ngOnInit() {
    this.reportServive.getAll()
      .subscribe(
        (res) => {
          this.reportDetails = res;
          this.reportDetails.forEach(element => {
            this.patientService.getOne(element.patient.patientId)
              .subscribe(
                (res)=> {
                  this.patients.push(res);
                  //console.log(res);
                },
                (error) => console.log(error)
              );
          });
        },
        (error) => console.log(error)
      );
  }

}
