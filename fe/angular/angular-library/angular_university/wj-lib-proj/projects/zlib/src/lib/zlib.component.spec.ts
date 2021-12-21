import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlibComponent } from './zlib.component';

describe('ZlibComponent', () => {
  let component: ZlibComponent;
  let fixture: ComponentFixture<ZlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZlibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
