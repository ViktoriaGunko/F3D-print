import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesAndServicesComponent } from './prices-and-services.component';

describe('PricesAndServicesComponent', () => {
  let component: PricesAndServicesComponent;
  let fixture: ComponentFixture<PricesAndServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricesAndServicesComponent]
    });
    fixture = TestBed.createComponent(PricesAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
