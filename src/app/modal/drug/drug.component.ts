import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {
  
  parent;

  constructor(public modalRef:BsModalRef, private toastr:ToastrService) { }

  ngOnInit() {
  }

  save(){
    this.toastr.success('yess','yess');
  }

  cancel(){
    this.modalRef.hide();
  }

}
