import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelectItemTableComponent } from './ui-select-item-table.component';

describe('UiSelectItemTableComponent', () => {
  let component: UiSelectItemTableComponent;
  let fixture: ComponentFixture<UiSelectItemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSelectItemTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSelectItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
