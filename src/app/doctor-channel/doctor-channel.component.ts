import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChannelInfoDTO } from '../services/dtd/channel.dtd';
import { ChannelService } from '../services/channel.service';
import { Doctor } from '../services/dtd/loggedUser.dtd';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-channel',
  templateUrl: './doctor-channel.component.html',
  styleUrls: ['./doctor-channel.component.css']
})
export class DoctorChannelComponent implements OnInit, OnChanges {

  @Input() docotrId = null;
  channelInfos: ChannelInfoDTO[];

  doctorDetails: Doctor[];

  constructor(private channelService:ChannelService, private doctorService:DoctorService) { }

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

}
