import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentsByDoctorComponent } from './appoinments-by-doctor.component';

describe('AppoinmentsByDoctorComponent', () => {
  let component: AppoinmentsByDoctorComponent;
  let fixture: ComponentFixture<AppoinmentsByDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoinmentsByDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentsByDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
