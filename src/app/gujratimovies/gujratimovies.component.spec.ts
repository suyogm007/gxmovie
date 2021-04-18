import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GujratimoviesComponent } from './gujratimovies.component';

describe('GujratimoviesComponent', () => {
  let component: GujratimoviesComponent;
  let fixture: ComponentFixture<GujratimoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GujratimoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GujratimoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
