import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AutenthicationService } from './services/autenthication.service';
import { FormsModule } from '@angular/forms';
import { KillersComponent } from './killers/killers.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Validator } from 'class-validator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KillersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    AutenthicationService,
    Validator
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
