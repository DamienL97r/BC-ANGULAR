import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPaiymentComponent } from './order-paiyment.component';

describe('OrderPaiymentComponent', () => {
  let component: OrderPaiymentComponent;
  let fixture: ComponentFixture<OrderPaiymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderPaiymentComponent]
    });
    fixture = TestBed.createComponent(OrderPaiymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
