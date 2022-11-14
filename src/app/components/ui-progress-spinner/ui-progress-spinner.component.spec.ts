import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProgressSpinnerComponent } from './ui-progress-spinner.component';

describe('UiProgressSpinnerComponent', () => {
  let component: UiProgressSpinnerComponent;
  let fixture: ComponentFixture<UiProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiProgressSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
