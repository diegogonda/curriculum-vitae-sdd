import { Component, input } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { HighlightsComponent } from '../highlights/highlights';
import { MetricsComponent } from '../metrics/metrics';
import { SnapshotComponent } from '../snapshot/snapshot';
import type { CvData } from '../../data';

@Component({
  selector: 'app-hero-section',
  imports: [HeaderComponent, HighlightsComponent, MetricsComponent, SnapshotComponent],
  template: `
    <section id="hero" class="py-16 px-4 max-w-5xl mx-auto">
      <app-header [data]="data().header" />
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <app-highlights [data]="data().highlights" />
        <app-snapshot [data]="data().snapshot" />
      </div>
      <div class="mt-10">
        <app-metrics [data]="data().metrics" />
      </div>
    </section>
  `,
  styles: ``,
})
export class HeroSectionComponent {
  readonly data = input.required<CvData>();
}
