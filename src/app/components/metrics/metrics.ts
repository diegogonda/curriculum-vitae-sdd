import { Component, input } from '@angular/core';
import type { Metrics } from '../../data';

@Component({
  selector: 'app-metrics',
  imports: [],
  template: `
    <div>
      <h2 class="text-lg font-semibold text-slate-900 mb-4">{{ data().title }}</h2>
      <div class="grid grid-cols-3 gap-6 text-center">
        @for (metric of data().items; track metric.label) {
          <div>
            <div class="text-3xl font-bold text-emerald-600">{{ metric.value }}</div>
            <div class="text-sm font-medium text-slate-800 mt-1">{{ metric.label }}</div>
            <div class="text-xs text-slate-500 mt-1">{{ metric.context }}</div>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class MetricsComponent {
  readonly data = input.required<Metrics>();
}
