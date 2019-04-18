import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DrugService{
    constructor(private httpClient:HttpClient){}

    saveDrug(info){
        return this.httpClient.post('http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/drug',info);
    }

    updateDrug(id, info){
        return this.httpClient.put(`http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/drug/update?drug-id=${id}`,info);
    }

    deletedDrug(id){
        return this.httpClient.delete(`http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/drug/remove?drug-id=${id}`);
    }

    getAll(){
        return this.httpClient.get('http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/drug/all-drug-details');
    }

    getById(id){
        return this.httpClient.get(`http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/drug/get-drug-by-id?drug-id=${id}`);
    }

    getByName(name){
        return this.httpClient.get(`http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/drug/get-drug-by-Name?drugName=${name}`);
    }
    
    getByManufacturer(manufacturer){
        return this.httpClient.get(`http://hospital-dev-v1.us-east-1.elasticbeanstalk.com/api/hospital/drug/get-drug-by-Name?manufacturer=${manufacturer}`);
    }
}