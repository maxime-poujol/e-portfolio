import { Component, Input } from '@angular/core';
import { TimelineItem } from '../../../../shared/interfaces/timeline-item';

@Component({
  selector: 'app-experiences-timeline',
  templateUrl: './experiences-timeline.component.html',
  styleUrls: ['./experiences-timeline.component.scss']
})
export class ExperiencesTimelineComponent {

  @Input() public timelineItems: TimelineItem[] | null | undefined;

}
