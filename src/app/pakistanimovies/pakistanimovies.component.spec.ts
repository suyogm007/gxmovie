import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakistanimoviesComponent } from './pakistanimovies.component';

describe('PakistanimoviesComponent', () => {
  let component: PakistanimoviesComponent;
  let fixture: ComponentFixture<PakistanimoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakistanimoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PakistanimoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
