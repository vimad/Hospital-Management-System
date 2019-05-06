import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { RoleComponent } from '../modal/role/role.component';
import { LoginService } from '../services/login.service';
import { StaffComponent } from '../modal/staff/staff.component';
import { Doctor } from '../services/dtd/loggedUser.dtd';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  modalRef:BsModalRef;

  doctors:Doctor[];

  constructor(private modalService:BsModalService, 
      private loginService:LoginService, private doctorService:DoctorService) { }

  ngOnInit() {
    this.doctorService.getAll()
      .subscribe(
        (res:Doctor[]) => {
          this.doctors = res;
        },
        (error) => console.log(error)
      );
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
