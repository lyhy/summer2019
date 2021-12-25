import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuMaskComponent } from './au-mask.component';

describe('AuMaskComponent', () => {
  let component: AuMaskComponent;
  let fixture: ComponentFixture<AuMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
