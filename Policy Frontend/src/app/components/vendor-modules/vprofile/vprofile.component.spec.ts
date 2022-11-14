import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VprofileComponent } from './vprofile.component';

describe('VprofileComponent', () => {
  let component: VprofileComponent;
  let fixture: ComponentFixture<VprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
