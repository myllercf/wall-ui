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
  warningPageable: WarningPageable;
  pageNumber: number = 0;
  pageSize: number = 10;
  totalPage: number;

  constructor(
    private service: WarningService,
    private route: ActivatedRoute) {  }

  ngOnInit() {
    this.warningPageable = this.route.snapshot.data.warningPageable;
    this.warnings = this.warningPageable[0].warnings;
    //this.pageNumber = this.warningPageable[0].page;
    //this.pageSize = this.warningPageable[0].size;
    //this.totalPage = this.warningPageable[0].total;
  }

  getAllWarningPaged(){
    this.service.getAllWarningPaged2(this.pageNumber, this.pageSize, 'id')
      .subscribe(warningPageable => this.warningPageable = warningPageable);
  }

}
