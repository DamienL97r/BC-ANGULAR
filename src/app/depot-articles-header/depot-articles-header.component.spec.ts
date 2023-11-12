import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotArticlesHeaderComponent } from './depot-articles-header.component';

describe('DepotArticlesHeaderComponent', () => {
  let component: DepotArticlesHeaderComponent;
  let fixture: ComponentFixture<DepotArticlesHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotArticlesHeaderComponent]
    });
    fixture = TestBed.createComponent(DepotArticlesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
