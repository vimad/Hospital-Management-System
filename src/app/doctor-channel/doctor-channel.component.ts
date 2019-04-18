import { Component, OnInit, Input } from '@angular/core';
import { ChannelInfoDTO } from '../services/dtd/channel.dtd';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-doctor-channel',
  templateUrl: './doctor-channel.component.html',
  styleUrls: ['./doctor-channel.component.css']
})
export class DoctorChannelComponent implements OnInit {

  @Input() docotrId = null;
  channelInfos: ChannelInfoDTO[];

  constructor(private channelService:ChannelService) { }

  ngOnInit() {
    if(this.docotrId != null){
      this.getChannelInfo();
    }
  }

  getChannelInfo(){
    this.channelService.getChannelByDoctorId(1)
      .subscribe(
        (response:any) => {
          this.channelInfos = response;
        }
      );
  }

}
