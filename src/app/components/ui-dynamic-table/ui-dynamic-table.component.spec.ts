import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDynamicTableComponent } from './ui-dynamic-table.component';

describe('UiDynamicTableComponent', () => {
  let component: UiDynamicTableComponent;
  let fixture: ComponentFixture<UiDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDynamicTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
