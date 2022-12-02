import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsEditCrudDialogComponent } from './discounts-edit-crud-dialog.component';

describe('DiscountsEditCrudDialogComponent', () => {
  let component: DiscountsEditCrudDialogComponent;
  let fixture: ComponentFixture<DiscountsEditCrudDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountsEditCrudDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountsEditCrudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
