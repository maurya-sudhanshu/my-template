import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbankdetailsComponent } from './userbankdetails.component';

describe('UserbankdetailsComponent', () => {
  let component: UserbankdetailsComponent;
  let fixture: ComponentFixture<UserbankdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbankdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
