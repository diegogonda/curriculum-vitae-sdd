import { Component, input } from '@angular/core';
import type { ExperienceEntry } from '../../data';

@Component({
  selector: 'app-experience-entry',
  imports: [],
  template: `
    <div class="relative pl-8 pb-10 border-l-2 border-emerald-200 last:border-l-0 last:pb-0">
      <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white"></div>
      <div class="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
        <div class="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 class="text-lg font-semibold text-slate-900">{{ entry().company }}</h3>
          <span class="text-sm text-slate-500">{{ entry().period }}</span>
        </div>
        <p class="text-slate-600 text-sm mb-1">{{ entry().position }}</p>
        @if (entry().narrative; as narrative) {
          <div class="mt-4 space-y-3">
            <div class="flex gap-3">
              <span class="text-amber-500 font-bold text-sm mt-0.5 shrink-0">RETO</span>
              <p class="text-slate-700 text-sm">{{ narrative.challenge }}</p>
            </div>
            <div class="flex items-center gap-2 pl-6">
              <span class="text-slate-300 text-lg">↡</span>
            </div>
            <div class="flex gap-3">
              <span class="text-blue-500 font-bold text-sm mt-0.5 shrink-0">ACCIÓN</span>
              <p class="text-slate-700 text-sm">{{ narrative.action }}</p>
            </div>
            <div class="flex items-center gap-2 pl-6">
              <span class="text-slate-300 text-lg">↡</span>
            </div>
            <div class="flex gap-3">
              <span class="text-emerald-500 font-bold text-sm mt-0.5 shrink-0">IMPACTO</span>
              <p class="text-slate-700 text-sm">{{ narrative.impact }}</p>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class ExperienceEntryComponent {
  readonly entry = input.required<ExperienceEntry>();
}
