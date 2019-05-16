import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { DrugService } from 'src/app/services/drug.serice';

@Component({
  selector: 'app-drug-view',
  templateUrl: './drug-view.component.html',
  styleUrls: ['./drug-view.component.css']
})
export class DrugViewComponent implements OnInit {

  drugDetails: any;

  constructor(public modalRef:BsModalRef, private drugService:DrugService) { }

  ngOnInit() {
    this.drugService.getAll()
      .subscribe(
        (res) => this.drugDetails = res,
        (error) => console.log(error)
      );
  }

}
