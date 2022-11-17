import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRowsTableComponent } from './room-rows-table.component';

describe('RoomRowsTableComponent', () => {
  let component: RoomRowsTableComponent;
  let fixture: ComponentFixture<RoomRowsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomRowsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomRowsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
