import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPolicyListComponent } from './all-policy-list.component';

describe('AllPolicyListComponent', () => {
  let component: AllPolicyListComponent;
  let fixture: ComponentFixture<AllPolicyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPolicyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
