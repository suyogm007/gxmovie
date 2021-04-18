import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabimoviesComponent } from './punjabimovies.component';

describe('PunjabimoviesComponent', () => {
  let component: PunjabimoviesComponent;
  let fixture: ComponentFixture<PunjabimoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunjabimoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunjabimoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
