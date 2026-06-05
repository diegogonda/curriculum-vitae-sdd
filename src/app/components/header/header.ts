import { Component, input } from '@angular/core';
import type { Header } from '../../data';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="flex flex-col md:flex-row items-center gap-6">
      <img
        src="photo.jpg"
        [alt]="data().photoAlt"
        class="w-32 h-32 rounded-full object-cover border-4 border-slate-200 shrink-0"
      />
      <div class="text-center md:text-left">
        <h1 class="text-4xl font-bold text-slate-900">{{ data().name }}</h1>
        <p class="mt-2 text-lg text-slate-600 max-w-xl">{{ data().role }}</p>
        <p class="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
          <span class="font-semibold text-slate-700">{{ data().targetRoleLabel }}:</span>
          {{ data().targetRoleValue }}
        </p>
        <div class="mt-4 flex flex-wrap justify-center md:justify-start gap-3 text-sm text-slate-600">
          @for (contact of data().contacts; track contact.type) {
            <a
              [href]="contact.href"
              [target]="contact.type === 'portfolio' || contact.type === 'linkedin' ? '_blank' : '_self'"
              class="hover:text-slate-900 underline underline-offset-2"
            >
              @switch (contact.type) {
                @case ('phone') { 📞 {{ contact.label }} }
                @case ('email') { ✉️ {{ contact.label }} }
                @case ('portfolio') { 🌐 {{ contact.label }} }
                @case ('linkedin') { 🔗 {{ contact.label }} }
              }
            </a>
          }
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  readonly data = input.required<Header>();
}
