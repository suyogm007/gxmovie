import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualaudioComponent } from './dualaudio.component';

describe('DualaudioComponent', () => {
  let component: DualaudioComponent;
  let fixture: ComponentFixture<DualaudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualaudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
