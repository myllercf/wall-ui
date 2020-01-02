import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resolver } from './resolver';
import {HomeComponent} from './home/home.component';
import {WarningWallComponent} from './warning-wall/warning-wall.component';
import {WarningDetailsComponent} from './warning-details/warning-details.component';
import {WarningRegisterComponent} from './warning-register/warning-register.component';


const routes: Routes = [
  {path: '', component: HomeComponent}
    , {path: 'mural', component: WarningWallComponent, resolve: { warningPageable: Resolver } }
    , {path: 'mural/:id', component: WarningDetailsComponent}
    , {path: 'cadastrar', component: WarningRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
