import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEditProfileComponent } from './control-edit-profile.component';

describe('ControlEditProfileComponent', () => {
  let component: ControlEditProfileComponent;
  let fixture: ComponentFixture<ControlEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
