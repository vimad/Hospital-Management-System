import { Component, OnInit } from '@angular/core';
import { SaveChannelDTO } from 'src/app/services/dtd/channel.dtd';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  channelDate:Date;
  saveChannelDto:SaveChannelDTO = {
    channelDate:null,
    startTime:null,
    endTime:null,
    patientLimit:null,
    channelDoctorId:null
  };

  constructor(public modalRef:BsModalRef) { }

  ngOnInit() {
  }

  save(){
    console.log(this.channelDate);
  }

}
