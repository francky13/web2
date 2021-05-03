import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationinfoComponent } from './vaccinationinfo.component';

describe('VaccinationinfoComponent', () => {
  let component: VaccinationinfoComponent;
  let fixture: ComponentFixture<VaccinationinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
