import { Component, inject, signal, effect, afterNextRender } from '@angular/core';
import { LocaleService } from './services/locale.service';
import { LocaleToggle } from './components/locale-toggle/locale-toggle';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { AboutMeComponent } from './components/about-me/about-me';
import { ExperienceSectionComponent } from './components/experience-section/experience-section';
import { SkillsCatalogComponent } from './components/skills-catalog/skills-catalog';
import { EducationSectionComponent } from './components/education-section/education-section';
import { FooterComponent } from './components/footer/footer';

interface NavItem {
  id: string;
  label: Record<'es' | 'en', string>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: { es: 'Inicio', en: 'Home' } },
  { id: 'about', label: { es: 'Sobre mí', en: 'About' } },
  { id: 'experience', label: { es: 'Experiencia', en: 'Experience' } },
  { id: 'skills', label: { es: 'Habilidades', en: 'Skills' } },
  { id: 'education', label: { es: 'Formación', en: 'Education' } },
];

@Component({
  selector: 'app-root',
  imports: [
    LocaleToggle,
    HeroSectionComponent,
    AboutMeComponent,
    ExperienceSectionComponent,
    SkillsCatalogComponent,
    EducationSectionComponent,
    FooterComponent,
  ],
  template: `
    <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 print:hidden">
      <div class="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <div class="flex items-center gap-1 overflow-x-auto">
          @for (item of navItems; track item.id) {
            <a
              [href]="'#' + item.id"
              class="px-3 py-1.5 rounded text-sm font-medium transition-colors shrink-0"
              [class.text-emerald-600]="activeSection() === item.id"
              [class.text-slate-600]="activeSection() !== item.id"
              [class.hover:text-slate-900]="activeSection() !== item.id"
              (click)="scrollTo(item.id)"
            >
              {{ locale() === 'es' ? item.label.es : item.label.en }}
            </a>
          }
        </div>
        <app-locale-toggle />
      </div>
    </nav>

    <main>
      <app-hero-section [data]="data()" />
      <app-about-me [data]="data().aboutMe" />
      <app-experience-section [data]="data()" />
      <app-skills-catalog [data]="data().skills" />
      <app-education-section [data]="data()" />
    </main>

    <app-footer [data]="data().footer" />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class App {
  private readonly localeService = inject(LocaleService);
  readonly data = this.localeService.data;
  readonly locale = this.localeService.locale;
  readonly navItems = NAV_ITEMS;
  readonly activeSection = signal('hero');

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
            }
          }
        },
        { rootMargin: '-20% 0px -70% 0px' }
      );

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      }
    });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
