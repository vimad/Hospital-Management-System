import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { ReciptionistComponent } from './reciptionist/reciptionist.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorAuthGuard } from './guards/doctor.guard';
import { NurseAuthGuard } from './guards/nurse_guard';
import { ReciptionistAuthGuard } from './guards/reciptionist.guard';
import { AdminAuthGuard } from './guards/admin.guard';
import { PatientMainComponent } from './patient-main/patient-main.component';
import { PatientGuard } from './guards/patient.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'doctor', component:DoctorComponent, canActivate:[DoctorAuthGuard]},
  {path:'nurse', component:NurseComponent, canActivate:[NurseAuthGuard]},
  {path:'reciptionist', component:ReciptionistComponent, canActivate:[ReciptionistAuthGuard]},
  {path:'admin', component:AdminComponent, canActivate:[AdminAuthGuard]},
  {path:'patient', component: PatientMainComponent, canActivate:[PatientGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
