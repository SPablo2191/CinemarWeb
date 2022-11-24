import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {TabViewModule} from 'primeng/tabview';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

import {CalendarModule} from 'primeng/calendar';
@NgModule({
  exports: [
    PasswordModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    CarouselModule,
    CardModule,
    RatingModule,
    DynamicDialogModule,
    TabViewModule,
    ProgressSpinnerModule,
    TableModule,
    ToolbarModule,
    CalendarModule
  ],
})
export class PrimeNgImportsModule {}
