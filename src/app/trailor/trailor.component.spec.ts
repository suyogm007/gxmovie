import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailorComponent } from './trailor.component';

describe('TrailorComponent', () => {
  let component: TrailorComponent;
  let fixture: ComponentFixture<TrailorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
