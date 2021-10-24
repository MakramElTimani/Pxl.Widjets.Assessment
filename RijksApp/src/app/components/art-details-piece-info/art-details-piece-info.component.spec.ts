import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDetailsPieceInfoComponent } from './art-details-piece-info.component';

describe('ArtDetailsPieceInfoComponent', () => {
  let component: ArtDetailsPieceInfoComponent;
  let fixture: ComponentFixture<ArtDetailsPieceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtDetailsPieceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtDetailsPieceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
