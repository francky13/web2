import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauxvacsComponent } from './tableauxvacs.component';

describe('TableauxvacsComponent', () => {
  let component: TableauxvacsComponent;
  let fixture: ComponentFixture<TableauxvacsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauxvacsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauxvacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
