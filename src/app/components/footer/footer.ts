import { Component, input } from '@angular/core';
import type { Footer } from '../../data';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="py-8 px-4 text-center text-sm text-slate-500 border-t border-slate-200">
      <p>{{ data().designed }} ♥</p>
      <p class="mt-1">© {{ currentYear }} Diego Gonda. {{ data().rights }}</p>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  readonly data = input.required<Footer>();
  readonly currentYear = new Date().getFullYear();
}
