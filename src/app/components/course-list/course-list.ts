import { Component, input } from '@angular/core';
import type { Courses } from '../../data';

@Component({
  selector: 'app-course-list',
  imports: [],
  template: `
    <div>
      <h2 class="text-2xl font-bold text-slate-900 mb-6">{{ data().title }}</h2>
      <div class="space-y-4">
        @for (item of data().items; track item.degree) {
          <div class="bg-slate-50 rounded-lg p-4">
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
export class CourseListComponent {
  readonly data = input.required<Courses>();
}
