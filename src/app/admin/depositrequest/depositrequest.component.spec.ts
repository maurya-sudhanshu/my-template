import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositrequestComponent } from './depositrequest.component';

describe('DepositrequestComponent', () => {
  let component: DepositrequestComponent;
  let fixture: ComponentFixture<DepositrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
