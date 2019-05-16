import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../shared/constants';

@Injectable({
    providedIn:"root"
})
export class AppoinmentService{
    constructor(private httpClient:HttpClient){}
    
    saveAppoinment(request){
        return this.httpClient.post(`${BASE_URL}/appoinment/add-Appoinment`, request);
    }

    updateAppoinment(id, request){
        return this.httpClient.put(`${BASE_URL}/appoinment/update-Appintment?appointment-Id=${id}`,request);
    }

    addByHospitalStaff(id, request){
        this.httpClient.put(`${BASE_URL}/appoinment/add-AppoinmentBy-HospitalStaff?patient-Id=${id}`,request);
    }

    deleteAppoinment(id){
        this.httpClient.delete(`${BASE_URL}/appoinment/delete-appoinment?appointment-Id=${id}`);
    }

    getAllAppoinments(){
        this.httpClient.get(`${BASE_URL}/appoinment/view-all-appoinments`);
    }

    getOneAppoinment(id){
        this.httpClient.get(`${BASE_URL}/appoinment/view-one-appoinment?appoinment-ID=${id}`);
    }

    getByChannelId(id){
        this.httpClient.get(`${BASE_URL}/appoinment/get-appoinment-from-channel?channel-Id=${id}`);
    }
    
    getByPatientId(id){
        this.httpClient.get(`${BASE_URL}/appoinment/get-appoinment-by-patient?patient-Id=${id}`);
    }
    
    getByDoctorId(id){
        this.httpClient.get(`${BASE_URL}/appoinment/get-appoinment-by-doctor?doctor-Id=${id}`);
    }
}