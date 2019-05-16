import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
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
import { BsDatepickerModule } from 'ngx-bootstrap';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from "ng-pick-datetime-moment";
import { AuthIntercepter } from './shared/auth.intercepter';
import { RoleComponent } from './modal/role/role.component';
import { StaffComponent } from './modal/staff/staff.component';
import { PatientComponent } from './modal/patient/patient.component';
import { PatientMainComponent } from './patient-main/patient-main.component';
import { ReportsByDoctorComponent } from './reports-by-doctor/reports-by-doctor.component';
import { AppoinmentsByDoctorComponent } from './appoinments-by-doctor/appoinments-by-doctor.component';
import { ReportComponent } from './modal/report/report.component';
import { PatientListComponent } from './modal/patient-list/patient-list.component';
import { DrugViewComponent } from './modal/drug-view/drug-view.component';


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
    ChannelComponent,
    RoleComponent,
    StaffComponent,
    PatientComponent,
    PatientMainComponent,
    ReportsByDoctorComponent,
    AppoinmentsByDoctorComponent,
    ReportComponent,
    PatientListComponent,
    DrugViewComponent
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
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlMomentDateTimeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DrugComponent,
    AppoinmentComponent,
    ChannelComponent,
    PatientComponent,
    StaffComponent,
    RoleComponent,
    ReportComponent,
    PatientListComponent,
    DrugViewComponent
  ]
})
export class AppModule { }
