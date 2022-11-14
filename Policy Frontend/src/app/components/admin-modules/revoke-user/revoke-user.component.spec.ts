import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeUserComponent } from './revoke-user.component';

describe('RevokeUserComponent', () => {
  let component: RevokeUserComponent;
  let fixture: ComponentFixture<RevokeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevokeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
