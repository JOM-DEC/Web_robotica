import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStatusComponent } from './control-status.component';

describe('ControlStatusComponent', () => {
  let component: ControlStatusComponent;
  let fixture: ComponentFixture<ControlStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
