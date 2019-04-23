import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthIntercepter implements HttpInterceptor{

    constructor(private logingService:LoginService){}

    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        if(this.logingService.getLoggedInUser() != null){
            const reqCopy = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.logingService.getLoggedInUser().accessToken)
            });
            return next.handle(reqCopy);
        }
        return next.handle(req);
    }
}