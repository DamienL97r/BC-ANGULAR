import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotArticlesContainerBasketComponent } from './depot-articles-container-basket.component';

describe('DepotArticlesContainerBasketComponent', () => {
  let component: DepotArticlesContainerBasketComponent;
  let fixture: ComponentFixture<DepotArticlesContainerBasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotArticlesContainerBasketComponent]
    });
    fixture = TestBed.createComponent(DepotArticlesContainerBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
