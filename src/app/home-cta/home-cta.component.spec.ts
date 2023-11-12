import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCTAComponent } from './home-cta.component';

describe('HomeCTAComponent', () => {
  let component: HomeCTAComponent;
  let fixture: ComponentFixture<HomeCTAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCTAComponent]
    });
    fixture = TestBed.createComponent(HomeCTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
