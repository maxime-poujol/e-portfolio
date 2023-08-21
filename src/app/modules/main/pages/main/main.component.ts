import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MainStore } from '../../state/main.reducers';
import { Store } from '@ngrx/store';
import { MainSelectors } from '../../state/main.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  private breakpointObserver = inject(BreakpointObserver);
  public  menu$ = this.store.select(MainSelectors.selectMenu)

  constructor(
    private readonly store: Store<MainStore>,
  ) {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
