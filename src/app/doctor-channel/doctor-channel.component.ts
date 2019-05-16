import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChannelInfoDTO } from '../services/dtd/channel.dtd';
import { ChannelService } from '../services/channel.service';
import { Doctor } from '../services/dtd/loggedUser.dtd';
import { DoctorService } from '../services/doctor.service';
import * as moment from 'moment';
import { AppoinmentService } from '../services/appoinmnet.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ChannelComponent } from '../modal/channel/channel.component';

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

  @Input()
  isReciptionist = false;

  @Input()
  patientId = -1;

  doctorDetails: Doctor[];

  modalRef:BsModalRef

  constructor(private channelService:ChannelService, private doctorService:DoctorService,
              private appoinmentService:AppoinmentService, private toastrService:ToastrService,
              private modalService:BsModalService) { }

  ngOnInit() {
    // console.log(this.patientId);
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
          if(this.patientId > 0){
            this.channelInfos.forEach(
              (info: ChannelInfoDTO)=>{
                info.appoinments.forEach(
                  (item) => {
                    // console.log(item.patients.patientId);
                    if(item.patients.patientId === this.patientId){
                      // console.log("here");
                      info.reserved = true;
                      info.reservedId = item.appoinmentId;
                    }
                  }
                )
              }
            );
          }
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
          this.getChannelInfo();
        },
        (error)=>{
          this.toastrService.error("Operation faild");
        }
      );
  }

  editAppoinment(info:ChannelInfoDTO){
    const req = {
      channelId: info.id.toString(),
      appoinentTime: info.appoinmentTime.format('HH:mm:ss')
    }

    this.appoinmentService.updateAppoinment(info.reservedId, req)
      .subscribe(
        (res)=>{
          this.toastrService.success("Appoinment Edited succesfully");
          this.getChannelInfo();
        },
        (error)=>{
          this.toastrService.error("Operation faild");
        }
      );
  }

  edit(info:ChannelInfoDTO){
    var date = "2019-03-18"
    this.modalService.show(
      ChannelComponent,
      {
        initialState: {
          channelDate: info.channelDate,
          startTime: moment(date + ' ' + info.startTime),
          endTime: moment(date + ' ' + info.endTime),
          patientLimit: info.patientLimit,
          selectedDoctorId: this.docotrId.toString(),
          isUpdate: true,
          channelId: info.id
        }
      }
    )
  }

}
