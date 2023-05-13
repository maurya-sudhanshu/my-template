import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdarwalrequestComponent } from './withdarwalrequest.component';

describe('WithdarwalrequestComponent', () => {
  let component: WithdarwalrequestComponent;
  let fixture: ComponentFixture<WithdarwalrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdarwalrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdarwalrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
