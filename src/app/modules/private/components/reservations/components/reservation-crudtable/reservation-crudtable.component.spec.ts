import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCRUDTableComponent } from './reservation-crudtable.component';

describe('ReservationCRUDTableComponent', () => {
  let component: ReservationCRUDTableComponent;
  let fixture: ComponentFixture<ReservationCRUDTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationCRUDTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationCRUDTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
