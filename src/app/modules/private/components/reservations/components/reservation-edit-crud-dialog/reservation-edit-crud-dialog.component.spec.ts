import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationEditCrudDialogComponent } from './reservation-edit-crud-dialog.component';

describe('ReservationEditCrudDialogComponent', () => {
  let component: ReservationEditCrudDialogComponent;
  let fixture: ComponentFixture<ReservationEditCrudDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationEditCrudDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationEditCrudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
