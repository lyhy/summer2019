import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCircleAllComponent } from './life-circle-all.component';

describe('LifeCircleAllComponent', () => {
  let component: LifeCircleAllComponent;
  let fixture: ComponentFixture<LifeCircleAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCircleAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCircleAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
