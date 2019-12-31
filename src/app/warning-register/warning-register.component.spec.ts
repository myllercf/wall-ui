import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningRegisterComponent } from './warning-register.component';

describe('WarningRegisterComponent', () => {
  let component: WarningRegisterComponent;
  let fixture: ComponentFixture<WarningRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
