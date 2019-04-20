import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../shared/constants';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(private httpClient:HttpClient){}

    addRole(request){
        return this.httpClient.post(`${BASE_URL}/user-role`,request);
    }

    addPatient(request){
        return this.httpClient.post(`${BASE_URL}/user/patient`,request);
    }

    addStaff(request){
        return this.httpClient.post(`${BASE_URL}/user/staff`,request);
    }
}