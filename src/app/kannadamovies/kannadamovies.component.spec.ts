import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KannadamoviesComponent } from './kannadamovies.component';

describe('KannadamoviesComponent', () => {
  let component: KannadamoviesComponent;
  let fixture: ComponentFixture<KannadamoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KannadamoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KannadamoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
