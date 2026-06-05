import { Component, input } from '@angular/core';
import type { Highlights } from '../../data';

@Component({
  selector: 'app-highlights',
  imports: [],
  template: `
    <div>
      <h2 class="text-lg font-semibold text-slate-900 mb-3">{{ data().title }}</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
        @for (item of data().items; track $index) {
          <li class="flex items-start gap-2 text-slate-700">
            <span class="text-emerald-500 mt-1 shrink-0">✦</span>
            <span>{{ item }}</span>
          </li>
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class HighlightsComponent {
  readonly data = input.required<Highlights>();
}
