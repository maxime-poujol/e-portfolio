import { Component, Input } from '@angular/core';
import { TimelineItem } from '../../../../shared/interfaces/timeline-item';

@Component({
  selector: 'app-experience-timeline',
  templateUrl: './experience-timeline.component.html',
  styleUrls: ['./experience-timeline.component.scss']
})
export class ExperienceTimelineComponent {

  @Input() public timelineItems: TimelineItem[] | null | undefined;

}
