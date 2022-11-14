import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnavbarComponent } from './cnavbar.component';

describe('CnavbarComponent', () => {
  let component: CnavbarComponent;
  let fixture: ComponentFixture<CnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
