import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewpanelComponent } from './adminviewpanel.component';

describe('AdminviewpanelComponent', () => {
  let component: AdminviewpanelComponent;
  let fixture: ComponentFixture<AdminviewpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
