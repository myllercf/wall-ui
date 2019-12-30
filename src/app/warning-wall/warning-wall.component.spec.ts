import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningWallComponent } from './warning-wall.component';

describe('WarningWallComponent', () => {
  let component: WarningWallComponent;
  let fixture: ComponentFixture<WarningWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
