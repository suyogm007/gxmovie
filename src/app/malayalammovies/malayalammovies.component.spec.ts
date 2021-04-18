import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalayalammoviesComponent } from './malayalammovies.component';

describe('MalayalammoviesComponent', () => {
  let component: MalayalammoviesComponent;
  let fixture: ComponentFixture<MalayalammoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalayalammoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalayalammoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
