import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiPasswordInputComponent } from './ui-password-input/ui-password-input.component';
import { PrimeNgImportsModule } from '../prime-ng-imports/prime-ng-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiLinkLabelComponent } from './ui-link-label/ui-link-label.component';
import { UiSideBarComponent } from './ui-side-bar/ui-side-bar.component';
import { UiMenuBarComponent } from './ui-menu-bar/ui-menu-bar.component';
import { UiIconBadgeComponent } from './ui-icon-badge/ui-icon-badge.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiCarouselComponent } from './ui-carousel/ui-carousel.component';
import { MovieDetailDialogComponent } from './movie-detail-dialog/movie-detail-dialog.component';
import { UiProgressSpinnerComponent } from './ui-progress-spinner/ui-progress-spinner.component';
import { UiDynamicTableComponent } from './ui-dynamic-table/ui-dynamic-table.component';
import { UiCalendarComponent } from './ui-calendar/ui-calendar.component';
import { UiSelectItemTableComponent } from './ui-select-item-table/ui-select-item-table.component';
import { UiToastComponent } from './ui-toast/ui-toast.component';


@NgModule({
  declarations: [
    UiInputComponent,
    UiPasswordInputComponent,
    UiLinkLabelComponent,
    UiSideBarComponent,
    UiMenuBarComponent,
    UiIconBadgeComponent,
    UiCardComponent,
    UiCarouselComponent,
    MovieDetailDialogComponent,
    UiProgressSpinnerComponent,
    UiDynamicTableComponent,
    UiCalendarComponent,
    UiSelectItemTableComponent,
    UiToastComponent
  ],
  imports: [
    CommonModule,
    PrimeNgImportsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[
    UiInputComponent,
    UiPasswordInputComponent,
    UiLinkLabelComponent,
    UiMenuBarComponent,
    UiCarouselComponent,
    UiProgressSpinnerComponent,
    UiDynamicTableComponent,
    UiCalendarComponent,
    UiSelectItemTableComponent,
    UiToastComponent
  ]
})
export class ComponentsModule { }
