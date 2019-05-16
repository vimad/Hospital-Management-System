import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugViewComponent } from './drug-view.component';

describe('DrugViewComponent', () => {
  let component: DrugViewComponent;
  let fixture: ComponentFixture<DrugViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
