import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilmoviesComponent } from './tamilmovies.component';

describe('TamilmoviesComponent', () => {
  let component: TamilmoviesComponent;
  let fixture: ComponentFixture<TamilmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamilmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamilmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
