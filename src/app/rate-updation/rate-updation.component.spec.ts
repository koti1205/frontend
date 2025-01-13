import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateUpdationComponent } from './rate-updation.component';

describe('RateUpdationComponent', () => {
  let component: RateUpdationComponent;
  let fixture: ComponentFixture<RateUpdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RateUpdationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
