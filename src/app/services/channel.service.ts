import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../shared/constants';

@Injectable({
    providedIn:'root'
})
export class ChannelService{

    constructor(private httpClient:HttpClient){}

    saveChannelInfo(info){
        return this.httpClient.post(`${BASE_URL}/channel`, info);
    }

    updateChannelInfo(id, info){
        return this.httpClient.put(`${BASE_URL}/channel/update?channel-id=${id}`, info);
    }

    getChannelByDoctorId(id){
       return this.httpClient.get(`${BASE_URL}/channel/get-by-doctor?doctor-id=${id}`);
    }

    getChannelByDoctorIdForTime(id, start, end){
        return this.httpClient.get(`${BASE_URL}/channel/get-by-doctor-filter-by-date?doctor-id=1&start-date=${start}&end-date=${end}`);
    }

    getAllChennelInfo(){
        return this.httpClient.get(`${BASE_URL}/channel/get-all`);
    }

    getChannelByDate(start, end){
        return this.httpClient.get(`${BASE_URL}/channel/get-channel-by-date?start-date=${start}&end-date=${end}`);
    }
}