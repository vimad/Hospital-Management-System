import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  role:string;

  constructor(public modalRef: BsModalRef, private userServive: UserService, private toastr:ToastrService) { }

  ngOnInit() {
  }

  cancel(){
    this.modalRef.hide();
  }

  save(){
    if(this.role){
      this.userServive.addRole({
        roleType: this.role
      }).subscribe(
        (res) => {
          this.toastr.success("Role added successfully..!!");
        },
        (error) => {
          this.toastr.error("The Role not added..!!");
          this.modalRef.hide();
        }
      )
    }else{
      this.toastr.error("Please enter a value..!!")
    }
  }

}
