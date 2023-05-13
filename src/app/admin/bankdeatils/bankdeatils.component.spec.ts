import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdeatilsComponent } from './bankdeatils.component';

describe('BankdeatilsComponent', () => {
  let component: BankdeatilsComponent;
  let fixture: ComponentFixture<BankdeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
