import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodmoviesComponent } from './bollywoodmovies.component';

describe('BollywoodmoviesComponent', () => {
  let component: BollywoodmoviesComponent;
  let fixture: ComponentFixture<BollywoodmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BollywoodmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BollywoodmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
