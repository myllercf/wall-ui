import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { WarningWallComponent } from './warning-wall/warning-wall.component';
import { HomeComponent } from './home/home.component';
import {ROUTES} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WarningWallComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
