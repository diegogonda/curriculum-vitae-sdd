import { Component, input } from '@angular/core';
import type { Skills } from '../../data';

@Component({
  selector: 'app-skills-catalog',
  imports: [],
  template: `
    <section id="skills" class="py-16 px-4 max-w-5xl mx-auto">
      <h2 class="text-2xl font-bold text-slate-900 mb-8">{{ data().title }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (category of data().categories; track category.name) {
          <div class="bg-slate-50 rounded-lg p-5">
            <h3 class="font-semibold text-slate-800 mb-3">{{ category.name }}</h3>
            <div class="flex flex-wrap gap-2">
              @for (skill of category.skills; track skill) {
                <span class="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-700">{{ skill }}</span>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class SkillsCatalogComponent {
  readonly data = input.required<Skills>();
}
