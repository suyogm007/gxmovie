import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhojpurimoviesComponent } from './bhojpurimovies.component';

describe('BhojpurimoviesComponent', () => {
  let component: BhojpurimoviesComponent;
  let fixture: ComponentFixture<BhojpurimoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhojpurimoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhojpurimoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
