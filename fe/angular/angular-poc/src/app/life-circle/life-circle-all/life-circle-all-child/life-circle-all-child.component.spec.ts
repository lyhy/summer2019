import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCircleAllChildComponent } from './life-circle-all-child.component';

describe('LifeCircleAllChildComponent', () => {
  let component: LifeCircleAllChildComponent;
  let fixture: ComponentFixture<LifeCircleAllChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCircleAllChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCircleAllChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
