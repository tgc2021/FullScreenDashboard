import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexWiseRMComponent } from './index-wise-rm.component';

describe('IndexWiseRMComponent', () => {
  let component: IndexWiseRMComponent;
  let fixture: ComponentFixture<IndexWiseRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexWiseRMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexWiseRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
