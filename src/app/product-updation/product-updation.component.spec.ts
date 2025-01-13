import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdationComponent } from './product-updation.component';

describe('ProductUpdationComponent', () => {
  let component: ProductUpdationComponent;
  let fixture: ComponentFixture<ProductUpdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductUpdationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
