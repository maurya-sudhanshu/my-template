import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNGComponent } from './png.component';

describe('PNGComponent', () => {
  let component: PNGComponent;
  let fixture: ComponentFixture<PNGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PNGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
