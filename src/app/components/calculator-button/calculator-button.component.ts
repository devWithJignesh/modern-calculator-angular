import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonType = 'number' | 'operator' | 'function' | 'equals' | 'memory';

@Component({
  selector: 'app-calculator-button',
  imports: [CommonModule],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css'
})
export class CalculatorButtonComponent {
  label = input.required<string>();
  type = input<ButtonType>('number');
  icon = input<string>('');
  disabled = input<boolean>(false);
  
  buttonClick = output<void>();

  onClick(): void {
    if (!this.disabled()) {
      this.buttonClick.emit();
    }
  }

  getButtonClass(): string {
    const baseClass = 'calc-button';
    const typeClass = `calc-button--${this.type()}`;
    const disabledClass = this.disabled() ? 'calc-button--disabled' : '';
    return `${baseClass} ${typeClass} ${disabledClass}`.trim();
  }
}

