import { Injectable } from '@angular/core';
import { BASE_URL } from '../shared/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class ReportService{

    constructor(private httpClient:HttpClient){}

    saveMedicalReport(request){
        return this.httpClient.post(`${BASE_URL}/medical-report/save-medical-report`,request);
    }

    saveBloodReport(){

    }

    updateMedicalReport(id, request){
        this.httpClient.put(`${BASE_URL}/medical-report/medical-record-update?medical-report-id=${id}`,request);
    }

    updateBloodReport(){

    }

    getAll(){
        this.httpClient.get(`${BASE_URL}/medical-report/all-medical-report`);
    }

    getById(id){
        this.httpClient.get(`${BASE_URL}/medical-report/medical-report-by-id?medical-report-id=${id}`)
    }

    getByPatientId(id){
        this.httpClient.get(`${BASE_URL}/medical-report/medical-reports-by-patient?patient-id=${id}`)
    }

    getByDoctorId(id){
        this.httpClient.get(`${BASE_URL}/medical-report/medical-reports-by-doctor?doctor-id=${id}`)
    }

    getByChannelId(id){
        this.httpClient.get(`${BASE_URL}/medical-report/medical-reports-by-channel?channel-id=${id}`)
    }

    getByDate(start,end){
        this.httpClient.get(`${BASE_URL}/medical-report/medical-reports-by-date?start-date=${start}&end-date=${end}`)
    }
}