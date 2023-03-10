import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergingRMComponent } from './emerging-rm.component';

describe('EmergingRMComponent', () => {
  let component: EmergingRMComponent;
  let fixture: ComponentFixture<EmergingRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergingRMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergingRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
