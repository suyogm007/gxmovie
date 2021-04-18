import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathimoviesComponent } from './marathimovies.component';

describe('MarathimoviesComponent', () => {
  let component: MarathimoviesComponent;
  let fixture: ComponentFixture<MarathimoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarathimoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarathimoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
