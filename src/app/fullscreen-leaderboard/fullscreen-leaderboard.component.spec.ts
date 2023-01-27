import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenLeaderboardComponent } from './fullscreen-leaderboard.component';

describe('FullscreenLeaderboardComponent', () => {
  let component: FullscreenLeaderboardComponent;
  let fixture: ComponentFixture<FullscreenLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullscreenLeaderboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
