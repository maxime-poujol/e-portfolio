import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesTimelineComponent } from './experiences-timeline.component';

describe('ExperiencesTimelineComponent', () => {
  let component: ExperiencesTimelineComponent;
  let fixture: ComponentFixture<ExperiencesTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencesTimelineComponent]
    });
    fixture = TestBed.createComponent(ExperiencesTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
