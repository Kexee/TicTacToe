import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button *ngIf="value">
      {{value}}
    </button>
  `,
  styles: ['button {height: 100%; width: 100% }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined
}
