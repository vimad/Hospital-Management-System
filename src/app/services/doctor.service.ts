import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class DoctorService{

    constructor(private httpClient:HttpClient){}

    getChannelByDoctorId(id){
       return this.httpClient.get('http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/channel/get-by-doctor?doctor-id='+id);
    }
}