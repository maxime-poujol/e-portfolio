import { Component } from '@angular/core';
import { HobbiesData } from '../../../../data/hobbies.data';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {

  data = HobbiesData();

}
