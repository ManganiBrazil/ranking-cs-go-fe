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
import { NestingSafePipe } from './pipe/nesting-safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KillersComponent,
    NestingSafePipe
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
    Validator,
    NestingSafePipe
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
