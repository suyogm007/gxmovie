import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindidubbedComponent } from './hindidubbed.component';

describe('HindidubbedComponent', () => {
  let component: HindidubbedComponent;
  let fixture: ComponentFixture<HindidubbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindidubbedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HindidubbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
