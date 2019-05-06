import { Component, OnInit, Input } from '@angular/core';
import { ChannelService } from '../services/channel.service';
import { ChannelInfoDTO } from '../services/dtd/channel.dtd';
import { Appoinment } from '../services/dtd/appoinment.dtd';

@Component({
  selector: 'app-appoinments-by-doctor',
  templateUrl: './appoinments-by-doctor.component.html',
  styleUrls: ['./appoinments-by-doctor.component.css']
})
export class AppoinmentsByDoctorComponent implements OnInit {

  @Input() doctorId;

  channelInfos:ChannelInfoDTO[];

  appoinments:Appoinment[] = [];

  constructor(private channelService: ChannelService) { }

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


}
