import { Component, input } from '@angular/core';
import type { AboutMe } from '../../data';

@Component({
  selector: 'app-about-me',
  imports: [],
  template: `
    <section id="about" class="py-16 px-4 max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold text-slate-900 mb-6">{{ data().title }}</h2>
      <p class="text-lg text-slate-700 font-medium mb-4">{{ data().summary }}</p>
      <p class="text-slate-600 mb-6">{{ data().content }}</p>
      <ul class="space-y-3">
        @for (point of data().points; track $index) {
          <li class="flex items-start gap-3 text-slate-600">
            <span class="text-emerald-500 mt-1 shrink-0">▸</span>
            <span>{{ point }}</span>
          </li>
        }
      </ul>
    </section>
  `,
  styles: ``,
})
export class AboutMeComponent {
  readonly data = input.required<AboutMe>();
}
