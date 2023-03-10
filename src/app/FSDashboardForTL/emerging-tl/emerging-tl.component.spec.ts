import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergingTLComponent } from './emerging-tl.component';

describe('EmergingTLComponent', () => {
  let component: EmergingTLComponent;
  let fixture: ComponentFixture<EmergingTLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergingTLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergingTLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
