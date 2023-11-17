import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button *ngIf="value" [disabled]="isDisabled">
      {{value}}
    </button>
  `,
  styles: ['button {height: 100%; width: 100%; font-size: 10rem; border-radius: 8px }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined;

  isDisabled: boolean = false

  verifyParam(param: string) {
    if (param) {
      this.isDisabled = !this.isDisabled
    }
  }
}
