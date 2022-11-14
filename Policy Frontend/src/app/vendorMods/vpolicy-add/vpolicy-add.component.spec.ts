import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpolicyAddComponent } from './vpolicy-add.component';

describe('VpolicyAddComponent', () => {
  let component: VpolicyAddComponent;
  let fixture: ComponentFixture<VpolicyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpolicyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpolicyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
