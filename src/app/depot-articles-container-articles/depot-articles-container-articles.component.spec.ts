import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotArticlesContainerArticlesComponent } from './depot-articles-container-articles.component';

describe('DepotArticlesContainerArticlesComponent', () => {
  let component: DepotArticlesContainerArticlesComponent;
  let fixture: ComponentFixture<DepotArticlesContainerArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotArticlesContainerArticlesComponent]
    });
    fixture = TestBed.createComponent(DepotArticlesContainerArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
