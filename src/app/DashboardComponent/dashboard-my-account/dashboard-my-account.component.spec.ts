import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMyAccountComponent } from './dashboard-my-account.component';

describe('DashboardMyAccountComponent', () => {
  let component: DashboardMyAccountComponent;
  let fixture: ComponentFixture<DashboardMyAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMyAccountComponent]
    });
    fixture = TestBed.createComponent(DashboardMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
