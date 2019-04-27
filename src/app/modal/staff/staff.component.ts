import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';

import * as moment from 'moment';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  name;
  email;
  userName;
  mobileNumber;
  password;
  nicNumber;
  birthDay = moment();
  line1;
  line2;
  city;
  country;
  position;
  selectedFile:File;

  constructor(public modalRef:BsModalRef, private userService:UserService, private toastr:ToastrService) { }

  ngOnInit() {
  }

  onUploadImage(event){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  save(){
    const form = new FormData();
    form.append('name',this.name);
    form.append('email',this.email);
    form.append('username',this.userName);
    form.append('password', this.password);
    form.append('mobileNumber', this.mobileNumber);
    form.append('nicNumber', this.nicNumber);
    form.append('line1', this.line1);
    form.append('line2', this.line2);
    form.append('country', this.country);
    form.append('city', this.city);
    form.append('position', this.position);
    form.append('birthDay', this.birthDay.format('YYYY-DD-MM'))
    form.append('profileImage', this.selectedFile);

    this.userService.addStaff(form)
      .subscribe(
        (res) => {
          this.toastr.success("Staff member registered succesfully");
          this.modalRef.hide();
        },
        (error) => {
          this.toastr.error("Patient registration failed");
        }
      )

  }

}
