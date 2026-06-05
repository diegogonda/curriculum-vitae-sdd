import { Component, input } from '@angular/core';
import type { Education } from '../../data';

@Component({
  selector: 'app-education-list',
  imports: [],
  template: `
    <div>
      <h2 class="text-2xl font-bold text-slate-900 mb-6">{{ data().title }}</h2>
      <div class="space-y-6">
        @for (item of data().items; track item.degree) {
          <div class="border-l-4 border-emerald-400 pl-4">
            <h3 class="font-semibold text-slate-800">{{ item.degree }}</h3>
            <p class="text-sm text-slate-500">{{ item.institution }} · {{ item.period }}</p>
            <p class="text-sm text-slate-600 mt-1">{{ item.description }}</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class EducationListComponent {
  readonly data = input.required<Education>();
}
