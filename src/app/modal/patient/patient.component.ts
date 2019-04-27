import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

import * as moment from 'moment';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

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
  specialArea;
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
    form.append('specialityArea', this.specialArea);
    form.append('birthDay', this.birthDay.format('YYYY-DD-MM'))
    form.append('profileImage', this.selectedFile);

    this.userService.addPatient(form)
      .subscribe(
        (res) => {
          this.toastr.success("Patient registered succesfully")
        },
        (error) => {
          this.toastr.error("Patient registration failed");
        }
      )

  }

}
