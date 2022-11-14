import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpolicyListComponent } from './vpolicy-list.component';

describe('VpolicyListComponent', () => {
  let component: VpolicyListComponent;
  let fixture: ComponentFixture<VpolicyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpolicyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
