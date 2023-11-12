import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpInComponent } from './sign-up-in.component';

describe('SignUpInComponent', () => {
  let component: SignUpInComponent;
  let fixture: ComponentFixture<SignUpInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpInComponent]
    });
    fixture = TestBed.createComponent(SignUpInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
