import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleToggle } from './locale-toggle';

describe('LocaleToggle', () => {
  let component: LocaleToggle;
  let fixture: ComponentFixture<LocaleToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaleToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(LocaleToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
