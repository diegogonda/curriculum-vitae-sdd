import { Component, computed, input } from '@angular/core';
import { ExperienceTimelineComponent } from '../experience-timeline/experience-timeline';
import { SupportingRolesComponent } from '../supporting-roles/supporting-roles';
import type { CvData } from '../../data';

@Component({
  selector: 'app-experience-section',
  imports: [ExperienceTimelineComponent, SupportingRolesComponent],
  template: `
    <section id="experience" class="py-16 px-4 max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold text-slate-900 mb-8">{{ data().experience.title }}</h2>
      <app-experience-timeline
        [data]="data().experience"
        [primaryRoles]="primaryRoles()"
      />
      <app-supporting-roles
        [data]="data().experience"
        [roles]="supportingRoles()"
      />
    </section>
  `,
  styles: ``,
})
export class ExperienceSectionComponent {
  readonly data = input.required<CvData>();
  readonly primaryRoles = computed(() =>
    this.data().experience.items.filter((e) => e.roleType === 'primary')
  );
  readonly supportingRoles = computed(() =>
    this.data().experience.items.filter((e) => e.roleType === 'supporting')
  );
}
