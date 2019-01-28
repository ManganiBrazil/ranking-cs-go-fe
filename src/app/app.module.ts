import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AutenthicationService } from './services/autenthication.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KillersComponent } from './killers/killers.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { DateValidatorDirective } from './directives/date-validator.directive';
import { DateService } from './services/date.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    KillersComponent,
    NgSwitchExampleComponent,
    DateValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    AutenthicationService,
    DateService
  ],
  exports: [
    DateValidatorDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
