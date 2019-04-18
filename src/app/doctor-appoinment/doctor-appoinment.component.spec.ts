import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppoinmentComponent } from './doctor-appoinment.component';

describe('DoctorAppoinmentComponent', () => {
  let component: DoctorAppoinmentComponent;
  let fixture: ComponentFixture<DoctorAppoinmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAppoinmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
