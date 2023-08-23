import { Component } from '@angular/core';
import { ExperiencesSelectors } from '../../state/experiences.selectors';
import { Store } from '@ngrx/store';
import { ExperiencesStore } from '../../state/experiences.reducers';
import { Observable } from 'rxjs';
import { TimelineItem } from '../../../../shared/interfaces/timeline-item';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  public timelineItems$: Observable<TimelineItem[]> = this.store.select(ExperiencesSelectors.selectTimeline);

  constructor(
    private readonly store: Store<ExperiencesStore>,
  ) {
  }
}
