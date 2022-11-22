import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsCrudTableComponent } from './shows-crud-table.component';

describe('ShowsCrudTableComponent', () => {
  let component: ShowsCrudTableComponent;
  let fixture: ComponentFixture<ShowsCrudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsCrudTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
