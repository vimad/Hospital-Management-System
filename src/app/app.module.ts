import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http"
import {ReactiveFormsModule} from "@angular/forms";
import { DoctorComponent } from './doctor/doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { ReciptionistComponent } from './reciptionist/reciptionist.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorAppoinmentComponent } from './doctor-appoinment/doctor-appoinment.component';
import { DoctorChannelComponent } from './doctor-channel/doctor-channel.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorComponent,
    NurseComponent,
    ReciptionistComponent,
    AdminComponent,
    DoctorAppoinmentComponent,
    DoctorChannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
