import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssamesemoviesComponent } from './assamesemovies.component';

describe('AssamesemoviesComponent', () => {
  let component: AssamesemoviesComponent;
  let fixture: ComponentFixture<AssamesemoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssamesemoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssamesemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
