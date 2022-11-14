import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyAccessComponent } from './policy-access.component';

describe('PolicyAccessComponent', () => {
  let component: PolicyAccessComponent;
  let fixture: ComponentFixture<PolicyAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
