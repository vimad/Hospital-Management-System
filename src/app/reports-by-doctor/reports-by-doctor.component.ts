import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-reports-by-doctor',
  templateUrl: './reports-by-doctor.component.html',
  styleUrls: ['./reports-by-doctor.component.css']
})
export class ReportsByDoctorComponent implements OnInit {

  private reportDetails;

  constructor(private reportServive:ReportService) { }

  ngOnInit() {
    this.reportServive.getAll()
      .subscribe(
        (res) => this.reportDetails = res,
        (error) => console.log(error)
      );
  }

}
