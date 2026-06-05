import { Component, input } from '@angular/core';
import type { Snapshot } from '../../data';

@Component({
  selector: 'app-snapshot',
  imports: [],
  template: `
    <div>
      <h2 class="text-lg font-semibold text-slate-900 mb-3">{{ data().title }}</h2>
      <p class="text-slate-700 mb-3">
        <span class="font-semibold">{{ data().profileLabel }}:</span>
        {{ data().profileValue }}
      </p>
      <div>
        <p class="text-sm font-semibold text-slate-700 mb-2">{{ data().keywordsLabel }}</p>
        <div class="flex flex-wrap gap-2">
          @for (kw of data().keywords; track kw) {
            <span class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">{{ kw }}</span>
          }
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SnapshotComponent {
  readonly data = input.required<Snapshot>();
}
