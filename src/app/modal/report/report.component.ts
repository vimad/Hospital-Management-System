import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DrugService } from 'src/app/services/drug.serice';
import { DrugInfo } from 'src/app/services/dtd/drug.dtd';
import { template } from '@angular/core/src/render3';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  appoinmentId: number;

  patientId: number;

  doctorId: number;

  doctorStatement;
  drugReport;
  drugs: number[] = [];

  drug;

  drugDetails: DrugInfo[] = [];

  selectedDrugs:DrugInfo[] = [];

  tempDrugs:DrugInfo[] = [];

  selectedDrug: DrugInfo;

  constructor(public modalRef:BsModalRef, private toastr:ToastrService, private drugService:DrugService,
              private reportService:ReportService) { }

  ngOnInit() {
    this.drugService.getAll()
      .subscribe(
        (res:DrugInfo[]) => {
          this.drugDetails = res;
          console.log(this.drugDetails);
        },
        (error) => console.log(error)
      );
  }

  change(){
    this.updateResult(this.drug);
  }

  cancel(){
    this.modalRef.hide();
  }

  updateResult(query) {
    this.tempDrugs =[];
    if(!this.drug){
      return;
    }
    this.drugDetails.map((drug) => {
        query.split(" ").map((word) => {
          //console.log(drug.drugName);
            if(drug.drugName.toLowerCase().indexOf(word.toLowerCase()) != -1){
                this.tempDrugs.push(drug);
            }
        })
    });
  }

  selectDrug(drug){
    this.selectedDrug = drug;
    //this.drug = "";
    this.drug = this.selectedDrug.drugName;
  }

  addDrug(){
    var temp = this.selectedDrugs.find((item)=> item.drugId === this.selectedDrug.drugId);
    if(!temp){
      this.drugs.push(this.selectedDrug.drugId);
      this.selectedDrugs.push(this.selectedDrug);
    }
    this.drug = "";
    this.tempDrugs =[];
  }

  removeDrug(drug){
    this.selectedDrugs = this.selectedDrugs.filter((item) => item.drugId !== drug.drugId);
    this.drugs = this.drugs.filter((item) => item !== drug.drugId);
  }

  save(){
    let req = {
      appointmentId: this.appoinmentId,
      patientId: this.patientId,
      doctorId: this.doctorId,
      doctorStatement: this.doctorStatement,
      drugReport: this.drugReport,
      drugs: this.drugs
    }
    this.reportService.saveMedicalReport(req)
      .subscribe(
        (res) => {
          this.toastr.show("Report saved successfully");
          this.modalRef.hide();
        },
        (error) => this.toastr.error(error.error.message)
      );
  }

}
