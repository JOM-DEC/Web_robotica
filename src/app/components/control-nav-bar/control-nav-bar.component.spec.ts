import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlNavBarComponent } from './control-nav-bar.component';

describe('ControlNavBarComponent', () => {
  let component: ControlNavBarComponent;
  let fixture: ComponentFixture<ControlNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
