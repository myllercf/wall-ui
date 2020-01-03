import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Warning } from '../warning.model';
import { WarningService } from '../warning.service';

@Component({
  selector: 'app-warning-details',
  templateUrl: './warning-details.component.html',
  styleUrls: ['./warning-details.component.css']
})
export class WarningDetailsComponent implements OnInit {

  warning: Warning;

  constructor(
    private service: WarningService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getWarning(this.route.snapshot.params['id']);
  }

  getWarning(id: number){
    this.service.getWarning(id)
    .subscribe(warning => this.warning = warning);
  }

  deleteWarning(id: number){
    this.service.deleteWarning(id);
    this.router.navigate(['/mural']);
  }

}
