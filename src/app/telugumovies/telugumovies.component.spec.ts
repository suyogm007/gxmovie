import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelugumoviesComponent } from './telugumovies.component';

describe('TelugumoviesComponent', () => {
  let component: TelugumoviesComponent;
  let fixture: ComponentFixture<TelugumoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelugumoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelugumoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
