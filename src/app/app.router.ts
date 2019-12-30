import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {WarningWallComponent} from './warning-wall/warning-wall.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent}
    , {path: 'mural', component: WarningWallComponent}
]