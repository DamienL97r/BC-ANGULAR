import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInformationsComponent } from './order-informations.component';

describe('OrderInformationsComponent', () => {
  let component: OrderInformationsComponent;
  let fixture: ComponentFixture<OrderInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderInformationsComponent]
    });
    fixture = TestBed.createComponent(OrderInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
