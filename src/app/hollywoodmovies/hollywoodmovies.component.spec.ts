import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollywoodmoviesComponent } from './hollywoodmovies.component';

describe('HollywoodmoviesComponent', () => {
  let component: HollywoodmoviesComponent;
  let fixture: ComponentFixture<HollywoodmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollywoodmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HollywoodmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
