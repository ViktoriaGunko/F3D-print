import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenu1Component } from './nav-menu1.component';

describe('NavMenu1Component', () => {
  let component: NavMenu1Component;
  let fixture: ComponentFixture<NavMenu1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavMenu1Component]
    });
    fixture = TestBed.createComponent(NavMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
