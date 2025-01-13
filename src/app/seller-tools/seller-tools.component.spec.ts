import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerToolsComponent } from './seller-tools.component';

describe('SellerToolsComponent', () => {
  let component: SellerToolsComponent;
  let fixture: ComponentFixture<SellerToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
