import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Warning } from '../warning.model';
import { Title } from '@angular/platform-browser';

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

  constructor() { }

  ngOnInit() {
  }

  butonIsValid(): boolean{
    return this.title.valid && this.description.valid;
  }

  onFormSubmit(): void {
    console.log('Name:' + this.title.value);
    console.log('Series:' + this.description.value);
    console.log(this.butonIsValid());
    
  }

}
