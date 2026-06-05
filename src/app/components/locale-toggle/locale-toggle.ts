import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-locale-toggle',
  imports: [],
  template: `
    <div class="flex gap-2 items-center">
      <button
        class="px-3 py-1 rounded text-sm font-medium transition-colors"
        [class.bg-slate-800]="locale() === 'es'"
        [class.text-white]="locale() === 'es'"
        [class.bg-slate-100]="locale() !== 'es'"
        [class.text-slate-500]="locale() !== 'es'"
        (click)="localeService.setLocale('es')"
      >
        ES
      </button>
      <button
        class="px-3 py-1 rounded text-sm font-medium transition-colors"
        [class.bg-slate-800]="locale() === 'en'"
        [class.text-white]="locale() === 'en'"
        [class.bg-slate-100]="locale() !== 'en'"
        [class.text-slate-500]="locale() !== 'en'"
        (click)="localeService.setLocale('en')"
      >
        EN
      </button>
    </div>
  `,
  styles: ``,
})
export class LocaleToggle {
  readonly localeService = inject(LocaleService);
  readonly locale = this.localeService.locale;
}
