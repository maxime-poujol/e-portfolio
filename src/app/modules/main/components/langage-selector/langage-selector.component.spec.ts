import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangageSelectorComponent } from './langage-selector.component';

describe('LangageSelectorComponent', () => {
  let component: LangageSelectorComponent;
  let fixture: ComponentFixture<LangageSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LangageSelectorComponent]
    });
    fixture = TestBed.createComponent(LangageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
