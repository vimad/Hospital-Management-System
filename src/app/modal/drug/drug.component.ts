import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';

import * as moment from 'moment';
import { DrugService } from 'src/app/services/drug.serice';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {
  
  parent;

  drugName;
  drugBrandName;
  drugSideEffect
  drugBrandNames:string[] =[];
  drugSideEffects:string[] =[];
  drugManufacturer;
  drugDescription;
  drugExpireDate;
  drugQuantity;

  constructor(public modalRef:BsModalRef, private toastr:ToastrService,
              private drugService:DrugService) { }

  ngOnInit() {
  }

  cancel(){
    this.modalRef.hide();
  }

  addBrandName(){
    this.drugBrandNames.push(this.drugBrandName);
    this.drugBrandName = '';
  }

  addSideEffect(){
    this.drugSideEffects.push(this.drugSideEffect);
    this.drugSideEffect = '';
  }

  save(){
    let req = {
      drugName: this.drugName,
      drugBrandNames: this.drugBrandNames,
      drugSideEffects: this.drugSideEffects,
      drugManufacturer: this.drugManufacturer,
      drugDescription: this.drugDescription,
      drugExpireDate: this.drugExpireDate.format("YYYY-MM-DD"),
      drugQuantity: parseInt(this.drugQuantity)
    }
    this.drugService.saveDrug(req)
      .subscribe(
        (res) => {
          this.toastr.success("Drug saved succesfully");
          this.modalRef.hide();
        },
        (error) => this.toastr.error(error)
      );
  }

}
