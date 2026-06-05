import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snapshot } from './snapshot';

describe('Snapshot', () => {
  let component: Snapshot;
  let fixture: ComponentFixture<Snapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Snapshot],
    }).compileComponents();

    fixture = TestBed.createComponent(Snapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
