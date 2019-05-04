import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsByDoctorComponent } from './reports-by-doctor.component';

describe('ReportsByDoctorComponent', () => {
  let component: ReportsByDoctorComponent;
  let fixture: ComponentFixture<ReportsByDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsByDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsByDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
