import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { WarningService } from '../warning.service';
import { Warning } from '../warning.model';

@Component({
  selector: 'app-warning-register',
  templateUrl: './warning-register.component.html',
  styleUrls: ['./warning-register.component.css']
})
export class WarningRegisterComponent implements OnInit {

  warning: Warning;
  warningForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('',[Validators.required, Validators.minLength(10)])
  });

  title = this.warningForm.get('title');
  description = this.warningForm.get('description');

  submitted = false;

  constructor(private service: WarningService) { }

  ngOnInit() {
  }

  butonIsValid(): boolean{
    return this.title.valid && this.description.valid;
  }

  onFormSubmit(): void {
    
    //this.warning = new Warning( this.warningForm.get('title').value,  this.warningForm.get('description').value);
    this.warning = {'id':1, 'title': 'Provas', 'description':'As provas finais irão ocorrer na semana de 16 a 20 de dezembro', 'publishDate': new Date(), 'viewDate': new Date()};
    console.log(this.warning);
    
    this.service.createWarning(this.warning);
  }

}
