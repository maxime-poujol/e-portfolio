import { Component } from '@angular/core';
import { ExperienceSelectors } from '../../state/experience.selectors';
import { Store } from '@ngrx/store';
import { ExperienceStore } from '../../state/experience.reducers';
import { Observable } from 'rxjs';
import { TimelineItem } from '../../../../shared/interfaces/timeline-item';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public timelineItems$: Observable<TimelineItem[]> = this.store.select(ExperienceSelectors.selectTimeline);

  constructor(
    private readonly store: Store<ExperienceStore>,
  ) {
  }
}
