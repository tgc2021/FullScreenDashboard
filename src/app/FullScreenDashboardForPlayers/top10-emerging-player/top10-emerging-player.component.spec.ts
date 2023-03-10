import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10EmergingPlayerComponent } from './top10-emerging-player.component';

describe('Top10EmergingPlayerComponent', () => {
  let component: Top10EmergingPlayerComponent;
  let fixture: ComponentFixture<Top10EmergingPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10EmergingPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top10EmergingPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
