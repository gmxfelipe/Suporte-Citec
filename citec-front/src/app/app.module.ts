import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { BackendService } from './backend.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import 'flatpickr/dist/flatpickr.css';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import localePt from '@angular/common/locales/pt-PT';
import { registerLocaleData } from '@angular/common';
import { HomeMainModule } from './home-main/home-main.module';
import { CandidaturaMainComponent } from './candidatura-main/candidatura-main.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { ProcessosComponent } from './processos/processos.component';
import { ProjetosComponent } from './projetos/projetos.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidaturaMainComponent,
    AvaliacaoComponent,
    ProcessosComponent,
    ProjetosComponent,
  ],
  imports: [
    BrowserModule,
    HomeMainModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ReactiveFormsModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
