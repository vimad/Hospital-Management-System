import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class DoctorService{

    constructor(private httpClient:HttpClient){}

    
}