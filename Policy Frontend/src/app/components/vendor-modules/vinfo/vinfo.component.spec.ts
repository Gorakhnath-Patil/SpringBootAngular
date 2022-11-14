import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinfoComponent } from './vinfo.component';

describe('VinfoComponent', () => {
  let component: VinfoComponent;
  let fixture: ComponentFixture<VinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
