import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WarningWallComponent } from './warning-wall/warning-wall.component';
import { HomeComponent } from './home/home.component';
import {ROUTES} from './app.router';
import { WarningDetailsComponent } from './warning-details/warning-details.component';
import { WarningRegisterComponent } from './warning-register/warning-register.component';
import { WarningService } from './warning.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WarningWallComponent,
    HomeComponent,
    WarningDetailsComponent,
    WarningRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [WarningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
