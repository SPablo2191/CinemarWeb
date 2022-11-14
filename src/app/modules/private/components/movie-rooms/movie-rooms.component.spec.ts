import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRoomsComponent } from './movie-rooms.component';

describe('MovieRoomsComponent', () => {
  let component: MovieRoomsComponent;
  let fixture: ComponentFixture<MovieRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
