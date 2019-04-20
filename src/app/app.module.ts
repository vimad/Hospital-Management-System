import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http"
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { DoctorComponent } from './doctor/doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { ReciptionistComponent } from './reciptionist/reciptionist.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorAppoinmentComponent } from './doctor-appoinment/doctor-appoinment.component';
import { DoctorChannelComponent } from './doctor-channel/doctor-channel.component'
import { ModalModule } from "ngx-bootstrap/modal";
import { DrugComponent } from './modal/drug/drug.component';
import { AppoinmentComponent } from './modal/appoinment/appoinment.component';
import { ChannelComponent } from './modal/channel/channel.component';

import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from "ng-pick-datetime-moment";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorComponent,
    NurseComponent,
    ReciptionistComponent,
    AdminComponent,
    DoctorAppoinmentComponent,
    DoctorChannelComponent,
    DrugComponent,
    AppoinmentComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlMomentDateTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DrugComponent,
    AppoinmentComponent,
    ChannelComponent
  ]
})
export class AppModule { }
