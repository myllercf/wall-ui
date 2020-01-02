import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { WarningService } from './warning.service';
import { WarningPageable } from './warning-pageable.model';

@Injectable()
export class Resolver implements Resolve<WarningPageable> {

    constructor(private service: WarningService) { }

    resolve(): Observable<WarningPageable> {
        return this.service.getAllWarningPaged();
      }
}
