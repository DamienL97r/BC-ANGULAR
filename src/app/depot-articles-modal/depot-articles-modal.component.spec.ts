import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotArticlesModalComponent } from './depot-articles-modal.component';

describe('DepotArticlesModalComponent', () => {
  let component: DepotArticlesModalComponent;
  let fixture: ComponentFixture<DepotArticlesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotArticlesModalComponent]
    });
    fixture = TestBed.createComponent(DepotArticlesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
