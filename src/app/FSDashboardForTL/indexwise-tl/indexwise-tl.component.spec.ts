import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexwiseTLComponent } from './indexwise-tl.component';

describe('IndexwiseTLComponent', () => {
  let component: IndexwiseTLComponent;
  let fixture: ComponentFixture<IndexwiseTLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexwiseTLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexwiseTLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
