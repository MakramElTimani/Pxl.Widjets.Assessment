import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDetailsImageComponent } from './art-details-image.component';

describe('ArtDetailsImageComponent', () => {
  let component: ArtDetailsImageComponent;
  let fixture: ComponentFixture<ArtDetailsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtDetailsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtDetailsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
