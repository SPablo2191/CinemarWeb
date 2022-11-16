import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEditCrudDialogComponent } from './room-edit-crud-dialog.component';

describe('RoomEditCrudDialogComponent', () => {
  let component: RoomEditCrudDialogComponent;
  let fixture: ComponentFixture<RoomEditCrudDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomEditCrudDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomEditCrudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
