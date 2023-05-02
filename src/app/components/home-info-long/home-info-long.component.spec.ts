import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInfoLongComponent } from './home-info-long.component';

describe('HomeInfoLongComponent', () => {
  let component: HomeInfoLongComponent;
  let fixture: ComponentFixture<HomeInfoLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInfoLongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInfoLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
