import { Component, OnInit, Input } from '@angular/core';
import { ChannelService } from '../services/channel.service';
import { ChannelInfoDTO } from '../services/dtd/channel.dtd';
import { Appoinment } from '../services/dtd/appoinment.dtd';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ReportComponent } from '../modal/report/report.component';

@Component({
  selector: 'app-appoinments-by-doctor',
  templateUrl: './appoinments-by-doctor.component.html',
  styleUrls: ['./appoinments-by-doctor.component.css']
})
export class AppoinmentsByDoctorComponent implements OnInit {

  @Input() doctorId;

  modalRef:BsModalRef;

  channelInfos:ChannelInfoDTO[];

  appoinments:Appoinment[] = [];

  constructor(private channelService: ChannelService, private modalService:BsModalService) { }

  ngOnInit() {
    if(this.doctorId != null){
      this.getChannelInfo();
    }
  }

  getChannelInfo(){
    this.channelService.getChannelByDoctorId(this.doctorId)
      .subscribe(
        (res:ChannelInfoDTO[]) => {
          this.channelInfos = res;
          this.getAppoinments();
        },
        (error) => console.log(error)
      );
  }

  getAppoinments(){
    if(this.channelInfos.length > 0){
      this.channelInfos.forEach(
        (channel) => {
          channel.appoinments.forEach(
            (appoinment) => this.appoinments.push(appoinment)
          )
        }
      )
    }
  }

  openReportMadal(app){
    this.modalRef = this.modalService.show(
      ReportComponent,
      {
        initialState: {
          appoinmentId: app.appoinmentId,
          patientId: app.patients.patientId,
          doctorId: this.doctorId
        }
      }
    );
  }


}
