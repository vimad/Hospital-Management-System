import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../shared/constants';

@Injectable({
    providedIn: 'root'
})
export class DrugService{
    constructor(private httpClient:HttpClient){}

    saveDrug(info){
        return this.httpClient.post(`${BASE_URL}/drug`,info);
    }

    updateDrug(id, info){
        return this.httpClient.put(`${BASE_URL}/drug/update?drug-id=${id}`,info);
    }

    deletedDrug(id){
        return this.httpClient.delete(`${BASE_URL}/drug/remove?drug-id=${id}`);
    }

    getAll(){
        return this.httpClient.get(`${BASE_URL}/drug/all-drug-details`);
    }

    getById(id){
        return this.httpClient.get(`${BASE_URL}/drug/get-drug-by-id?drug-id=${id}`);
    }

    getByName(name){
        return this.httpClient.get(`${BASE_URL}/drug/get-drug-by-Name?drugName=${name}`);
    }
    
    getByManufacturer(manufacturer){
        return this.httpClient.get(`${BASE_URL}/drug/get-drug-by-Name?manufacturer=${manufacturer}`);
    }
}