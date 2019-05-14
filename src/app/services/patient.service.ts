import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../shared/constants';

@Injectable({
    providedIn:'root'
})
export class PatientService{

    constructor(private httpClient:HttpClient){}

    getOne(id){
        this.httpClient.get(`${BASE_URL}/patient/patient-service?patient-id=${id}`);
    }

    getAll(){
        return this.httpClient.get(`${BASE_URL}/patient/all-patient-service`);
    }
}