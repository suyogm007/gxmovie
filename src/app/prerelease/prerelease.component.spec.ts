import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrereleaseComponent } from './prerelease.component';

describe('PrereleaseComponent', () => {
  let component: PrereleaseComponent;
  let fixture: ComponentFixture<PrereleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrereleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrereleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
