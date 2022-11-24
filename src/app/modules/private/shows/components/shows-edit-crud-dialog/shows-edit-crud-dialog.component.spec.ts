import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsEditCrudDialogComponent } from './shows-edit-crud-dialog.component';

describe('ShowsEditCrudDialogComponent', () => {
  let component: ShowsEditCrudDialogComponent;
  let fixture: ComponentFixture<ShowsEditCrudDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsEditCrudDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsEditCrudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
