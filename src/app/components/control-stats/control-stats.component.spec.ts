import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStatsComponent } from './control-stats.component';

describe('ControlStatsComponent', () => {
  let component: ControlStatsComponent;
  let fixture: ComponentFixture<ControlStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
