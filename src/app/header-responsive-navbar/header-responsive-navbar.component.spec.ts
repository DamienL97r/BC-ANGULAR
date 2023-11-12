import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderResponsiveNavbarComponent } from './header-responsive-navbar.component';

describe('HeaderResponsiveNavbarComponent', () => {
  let component: HeaderResponsiveNavbarComponent;
  let fixture: ComponentFixture<HeaderResponsiveNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderResponsiveNavbarComponent]
    });
    fixture = TestBed.createComponent(HeaderResponsiveNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
