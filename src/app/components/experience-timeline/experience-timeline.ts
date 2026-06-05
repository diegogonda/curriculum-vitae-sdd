import { Component, input } from '@angular/core';
import { ExperienceEntryComponent } from '../experience-entry/experience-entry';
import type { Experience, ExperienceEntry } from '../../data';

@Component({
  selector: 'app-experience-timeline',
  imports: [ExperienceEntryComponent],
  template: `
    <div>
      @for (entry of primaryRoles(); track entry.company) {
        <app-experience-entry [entry]="entry" />
      }
    </div>
  `,
  styles: ``,
})
export class ExperienceTimelineComponent {
  readonly data = input.required<Experience>();
  readonly primaryRoles = input.required<ExperienceEntry[]>();
}
