import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator-display',
  imports: [CommonModule],
  templateUrl: './calculator-display.component.html',
  styleUrl: './calculator-display.component.css'
})
export class CalculatorDisplayComponent {
  expression = input<string>('');
  value = input<string>('0');
  memoryValue = input<number>(0);
}

