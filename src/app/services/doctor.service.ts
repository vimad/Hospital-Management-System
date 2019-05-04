
import { Injectable } from '@angular/core';
import { BASE_URL } from '../shared/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class DoctorService{
    constructor(private httpClient:HttpClient){}

    getOne(id){
        return this.httpClient.get(`${BASE_URL}/doctor/doctor-service?doctor-id=${id}`);
    }

    getAll(){
        return this.httpClient.get(`${BASE_URL}/doctor/all-doctor-service`);
    }
}