import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Warning } from '../warning.model';

@Component({
  selector: 'app-warning-details',
  templateUrl: './warning-details.component.html',
  styleUrls: ['./warning-details.component.css']
})
export class WarningDetailsComponent implements OnInit {

  warning: Warning;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getWarning();
  }

  getWarning(){
    this.warning = {'id':1, 'title': 'Provas', 'description':'As provas finais irão ocorrer na semana de 16 a 20 de dezembro', 'publishDate': new Date(), 'viewDate': new Date()};
  }

}
