import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallTLComponent } from './overall-tl.component';

describe('OverallTLComponent', () => {
  let component: OverallTLComponent;
  let fixture: ComponentFixture<OverallTLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallTLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallTLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
