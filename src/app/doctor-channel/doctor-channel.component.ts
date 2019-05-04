import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChannelInfoDTO } from '../services/dtd/channel.dtd';
import { ChannelService } from '../services/channel.service';
import { Doctor } from '../services/dtd/loggedUser.dtd';
import { DoctorService } from '../services/doctor.service';
import * as moment from 'moment';
import { AppoinmentService } from '../services/appoinmnet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-channel',
  templateUrl: './doctor-channel.component.html',
  styleUrls: ['./doctor-channel.component.css']
})
export class DoctorChannelComponent implements OnInit, OnChanges {

  @Input() docotrId = null;
  channelInfos: ChannelInfoDTO[];

  @Input()
  isPatient = false;

  doctorDetails: Doctor[];

  constructor(private channelService:ChannelService, private doctorService:DoctorService,
              private appoinmentService:AppoinmentService, private toastrService:ToastrService) { }

  ngOnInit() {
    if(this.docotrId != null){
      this.getChannelInfo();
    }
  }

  ngOnChanges(){
    this.getChannelInfo();
  }

  getChannelInfo(){
    if(this.docotrId > 0){
      this.channelService.getChannelByDoctorId(this.docotrId)
      .subscribe(
        (response:any) => {
          this.channelInfos = response;
        }
      );
    }

    if(this.docotrId == -1){
      this.channelService.getAllChennelInfo()
        .subscribe(
          (res:any) => this.channelInfos = res,
          (error) => console.log(error)
        );
    }
    
  }

  addAppoinment(info:ChannelInfoDTO){
    const req = {
      channelId: info.id.toString(),
      appoinentTime: info.appoinmentTime.format('HH:mm:ss')
    }

    this.appoinmentService.saveAppoinment(req)
      .subscribe(
        (res)=>{
          this.toastrService.success("Appoinment added succesfully");
        },
        (error)=>{
          this.toastrService.error("Operation faild");
        }
      );
  }

}
