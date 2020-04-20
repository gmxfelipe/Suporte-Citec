import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main.component';
import { Fiec1Component } from './fiec1/fiec1.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import 'flatpickr/dist/flatpickr.css';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import localePt from '@angular/common/locales/pt-PT';
import { registerLocaleData } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BackendService } from '../backend.service';
import { Fiec2Component } from './fiec2/fiec2.component';
import { AppRoutingModule } from '../app-routing.module';


registerLocaleData(localePt);
@NgModule({
    declarations: [HomeMainComponent, Fiec1Component, Fiec2Component],
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
    ],
    providers: [BackendService],
})
export class HomeMainModule { }
