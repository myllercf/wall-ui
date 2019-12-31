import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { WarningWallComponent } from './warning-wall/warning-wall.component';
import { HomeComponent } from './home/home.component';
import {ROUTES} from './app.router';
import { WarningDetailsComponent } from './warning-details/warning-details.component';
import { WarningRegisterComponent } from './warning-register/warning-register.component';

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
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
