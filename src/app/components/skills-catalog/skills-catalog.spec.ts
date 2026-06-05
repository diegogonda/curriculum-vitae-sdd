import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCatalog } from './skills-catalog';

describe('SkillsCatalog', () => {
  let component: SkillsCatalog;
  let fixture: ComponentFixture<SkillsCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsCatalog],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
