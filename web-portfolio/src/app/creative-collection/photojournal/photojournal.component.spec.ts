import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotojournalComponent } from './photojournal.component';

describe('PhotojournalComponent', () => {
  let component: PhotojournalComponent;
  let fixture: ComponentFixture<PhotojournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotojournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotojournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
