import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsCRUDTableComponent } from './rooms-crudtable.component';

describe('RoomsCRUDTableComponent', () => {
  let component: RoomsCRUDTableComponent;
  let fixture: ComponentFixture<RoomsCRUDTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsCRUDTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsCRUDTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
