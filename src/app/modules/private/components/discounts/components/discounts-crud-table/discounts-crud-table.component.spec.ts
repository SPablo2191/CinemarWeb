import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsCrudTableComponent } from './discounts-crud-table.component';

describe('DiscountsCrudTableComponent', () => {
  let component: DiscountsCrudTableComponent;
  let fixture: ComponentFixture<DiscountsCrudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountsCrudTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountsCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
