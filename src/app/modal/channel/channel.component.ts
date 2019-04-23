import { Component, OnInit } from '@angular/core';
import { SaveChannelDTO } from 'src/app/services/dtd/channel.dtd';
import { BsModalRef } from 'ngx-bootstrap';

import * as moment from 'moment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChannelService } from 'src/app/services/channel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  channelDate = moment();
  startTime;
  endTime;
  patientLimit;
  doctor;
  // saveChannelDto:SaveChannelDTO = {
  //   channelDate:null,
  //   startTime:null,
  //   endTime:null,
  //   patientLimit:null,
  //   channelDoctorId:null
  // };

  constructor(public modalRef:BsModalRef, private channelService:ChannelService, 
              private toastrService:ToastrService) { }

  ngOnInit() {
  }

  save(){
    let saveChannelDto:SaveChannelDTO = {
      channelDate: this.startTime.format('LL'),
      startTime: this.startTime.format('HH:mm:ss'),
      endTime:this.endTime.format('HH:mm:ss'),
      patientLimit: +this.patientLimit,
      channelDoctorId: +this.doctor
    }

    this.channelService.saveChannelInfo(saveChannelDto)
      .subscribe(
        (res) => {
          this.toastrService.success("success");
          this.modalRef.hide();
        },
        (error) => {
          this.toastrService.error(error.message);
        }
      )

    // let da = this.channelDate.format('LL');
    // let s = this.startTime.format('LTS');
    // console.log(da);
    // console.log(s);
    // console.log(this.endTime);
  }

}
