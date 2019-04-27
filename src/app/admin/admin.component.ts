import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { RoleComponent } from '../modal/role/role.component';
import { LoginService } from '../services/login.service';
import { StaffComponent } from '../modal/staff/staff.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  modalRef:BsModalRef;
  constructor(private modalService:BsModalService, 
      private loginService:LoginService) { }

  ngOnInit() {
  }

  addRole(){
      this.modalRef = this.modalService.show(RoleComponent);
  }

  addStaff(){
    this.modalRef = this.modalService.show(StaffComponent);
  }

  logOut(){
    this.loginService.logOut();
  }

}
