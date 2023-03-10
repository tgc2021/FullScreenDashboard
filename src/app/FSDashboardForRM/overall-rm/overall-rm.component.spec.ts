import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallRMComponent } from './overall-rm.component';

describe('OverallRMComponent', () => {
  let component: OverallRMComponent;
  let fixture: ComponentFixture<OverallRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallRMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
