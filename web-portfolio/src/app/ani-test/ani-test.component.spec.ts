import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniTestComponent } from './ani-test.component';

describe('AniTestComponent', () => {
  let component: AniTestComponent;
  let fixture: ComponentFixture<AniTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
