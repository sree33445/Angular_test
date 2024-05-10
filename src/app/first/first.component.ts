import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  showme: Boolean = true;

  colors = ['Red', 'Green', 'Blue'];

  fruit = 'Apple';
}
