import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorChannelComponent } from './doctor-channel.component';

describe('DoctorChannelComponent', () => {
  let component: DoctorChannelComponent;
  let fixture: ComponentFixture<DoctorChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
