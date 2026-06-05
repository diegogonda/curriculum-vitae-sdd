import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingRoles } from './supporting-roles';

describe('SupportingRoles', () => {
  let component: SupportingRoles;
  let fixture: ComponentFixture<SupportingRoles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportingRoles],
    }).compileComponents();

    fixture = TestBed.createComponent(SupportingRoles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
