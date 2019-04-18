import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class ChannelService{

    constructor(private httpClient:HttpClient){}

    saveChannelInfo(info){
        return this.httpClient.post('http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/channel', info);
    }

    updateChannelInfo(id, info){
        return this.httpClient.put(`http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/channel/update?channel-id=${id}`, info);
    }

    getChannelByDoctorId(id){
       return this.httpClient.get('http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/channel/get-by-doctor?doctor-id='+id);
    }

    getChannelByDoctorIdForTime(id, start, end){
        return this.httpClient.get(`http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/channel/get-by-doctor-filter-by-date?doctor-id=1&start-date=${start}&end-date=${end}`);
    }

    getAllChennelInfo(){
        return this.httpClient.get('http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/channel/get-all');
    }

    getChannelByDate(start, end){
        return this.httpClient.get(`http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/channel/get-channel-by-date?start-date=${start}&end-date=${end}`);
    }
}