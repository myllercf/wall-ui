import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningDetailsComponent } from './warning-details.component';

describe('WarningDetailsComponent', () => {
  let component: WarningDetailsComponent;
  let fixture: ComponentFixture<WarningDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
