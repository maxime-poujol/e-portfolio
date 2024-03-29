import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../../shared/interfaces/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() public menu: MenuItem[] | null |  undefined;


}
