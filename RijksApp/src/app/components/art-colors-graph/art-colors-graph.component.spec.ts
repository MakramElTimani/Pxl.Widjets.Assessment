import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtColorsGraphComponent } from './art-colors-graph.component';

describe('ArtColorsGraphComponent', () => {
  let component: ArtColorsGraphComponent;
  let fixture: ComponentFixture<ArtColorsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtColorsGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtColorsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
