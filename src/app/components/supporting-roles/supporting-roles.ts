import { Component, input } from '@angular/core';
import type { Experience, ExperienceEntry } from '../../data';

@Component({
  selector: 'app-supporting-roles',
  imports: [],
  template: `
    <div class="mt-8">
      <h3 class="text-lg font-semibold text-slate-800 mb-4">{{ data().otherTitle }}</h3>
      <div class="space-y-3">
        @for (role of roles(); track role.company) {
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-2 border-b border-slate-100 last:border-0">
            <div>
              <span class="font-medium text-slate-800">{{ role.company }}</span>
              <span class="text-slate-400 mx-2">·</span>
              <span class="text-slate-600 text-sm">{{ role.position }}</span>
            </div>
            <span class="text-sm text-slate-500 shrink-0">{{ role.period }}</span>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class SupportingRolesComponent {
  readonly data = input.required<Experience>();
  readonly roles = input.required<ExperienceEntry[]>();
}
