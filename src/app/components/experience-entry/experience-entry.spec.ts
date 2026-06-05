import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceEntry } from './experience-entry';

describe('ExperienceEntry', () => {
  let component: ExperienceEntry;
  let fixture: ComponentFixture<ExperienceEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceEntry],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
