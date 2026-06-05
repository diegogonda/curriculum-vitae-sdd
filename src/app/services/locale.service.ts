import { computed, Injectable, signal } from '@angular/core';
import { translations, type CvData } from '../data';

export type Locale = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly localeSignal = signal<Locale>('es');

  readonly locale = this.localeSignal.asReadonly();
  readonly data = computed<CvData>(() => translations[this.localeSignal()]);

  setLocale(locale: Locale): void {
    this.localeSignal.set(locale);
  }

  toggle(): void {
    this.localeSignal.update((l) => (l === 'es' ? 'en' : 'es'));
  }
}
