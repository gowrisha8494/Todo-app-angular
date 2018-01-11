import { Component, Input} from '@angular/core';
import {ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CountComponent {
  @Input()
count: number;

}
