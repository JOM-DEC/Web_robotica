import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlProfileComponent } from './control-profile.component';

describe('ControlProfileComponent', () => {
  let component: ControlProfileComponent;
  let fixture: ComponentFixture<ControlProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
