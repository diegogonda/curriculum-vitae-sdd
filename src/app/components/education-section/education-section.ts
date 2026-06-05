import { Component, input } from '@angular/core';
import { EducationListComponent } from '../education-list/education-list';
import { CourseListComponent } from '../course-list/course-list';
import type { CvData } from '../../data';

@Component({
  selector: 'app-education-section',
  imports: [EducationListComponent, CourseListComponent],
  template: `
    <section id="education" class="py-16 px-4 max-w-3xl mx-auto">
      <app-education-list [data]="data().education" />
      <div class="mt-12">
        <app-course-list [data]="data().courses" />
      </div>
    </section>
  `,
  styles: ``,
})
export class EducationSectionComponent {
  readonly data = input.required<CvData>();
}
