import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WarningService } from '../warning.service';
import { Warning } from '../warning.model';
import { WarningPageable } from '../warning-pageable.model';

@Component({
  selector: 'app-warning-wall',
  templateUrl: './warning-wall.component.html',
  styleUrls: ['./warning-wall.component.css']
})
export class WarningWallComponent implements OnInit {

  warnings: Warning[];
  warningPageable: WarningPageable = new WarningPageable(null, null, null, null, null, null);

  constructor(
    private service: WarningService,
    private route: ActivatedRoute) {  }

  ngOnInit() {
    this.warningPageable = this.route.snapshot.data.warningPageable;
    this.warnings = this.warningPageable[0].warnings;
  }

  getAllWarningPaged(){
    this.service.getAllWarningPaged()
      .subscribe(warningPageable => this.warningPageable = warningPageable);
  }

}
