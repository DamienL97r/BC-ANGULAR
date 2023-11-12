import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotArticlesComponent } from './depot-articles.component';

describe('DepotArticlesComponent', () => {
  let component: DepotArticlesComponent;
  let fixture: ComponentFixture<DepotArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotArticlesComponent]
    });
    fixture = TestBed.createComponent(DepotArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
