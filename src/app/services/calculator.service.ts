import { Injectable, signal } from '@angular/core';

export interface CalculationHistory {
  expression: string;
  result: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private currentValue = signal<string>('0');
  private expression = signal<string>('');
  private previousValue = signal<number | null>(null);
  private operation = signal<string | null>(null);
  private waitingForNewValue = signal<boolean>(false);
  private memory = signal<number>(0);

  // Public signals
  public readonly displayValue = this.currentValue.asReadonly();
  public readonly displayExpression = this.expression.asReadonly();
  public readonly memoryValue = this.memory.asReadonly();

  constructor() {}

  // Number input
  inputNumber(num: string): void {
    if (this.waitingForNewValue()) {
      this.currentValue.set(num);
      this.waitingForNewValue.set(false);
    } else {
      const current = this.currentValue();
      if (current === '0' || current === 'Error') {
        this.currentValue.set(num);
      } else {
        this.currentValue.set(current + num);
      }
    }
  }

  // Decimal point
  inputDecimal(): void {
    if (this.waitingForNewValue()) {
      this.currentValue.set('0.');
      this.waitingForNewValue.set(false);
    } else if (!this.currentValue().includes('.')) {
      this.currentValue.set(this.currentValue() + '.');
    }
  }

  // Operations
  setOperation(op: string): void {
    const inputValue = parseFloat(this.currentValue());

    if (this.previousValue() === null) {
      this.previousValue.set(inputValue);
    } else if (this.operation()) {
      const result = this.calculate();
      this.currentValue.set(String(result));
      this.previousValue.set(result);
    }

    this.waitingForNewValue.set(true);
    this.operation.set(op);
    this.updateExpression();
  }

  // Calculate result
  calculate(): number {
    const prev = this.previousValue();
    const current = parseFloat(this.currentValue());
    const op = this.operation();

    if (prev === null || op === null) {
      return current;
    }

    let result: number;

    switch (op) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        if (current === 0) {
          this.currentValue.set('Error');
          throw new Error('Division by zero');
        }
        result = prev / current;
        break;
      case '%':
        result = prev % current;
        break;
      default:
        result = current;
    }

    return result;
  }

  // Equals
  performCalculation(): string {
    if (this.operation() && !this.waitingForNewValue()) {
      try {
        const prev = this.previousValue();
        const current = parseFloat(this.currentValue());
        const op = this.operation();
        const result = this.calculate();
        const resultStr = this.formatResult(result);
        
        // Build complete expression for history
        const expression = `${prev} ${op} ${current} =`;
        
        // Add to history (will be handled by history service)
        const historyEntry: CalculationHistory = {
          expression: expression,
          result: resultStr,
          timestamp: new Date()
        };

        this.currentValue.set(resultStr);
        this.expression.set('');
        this.previousValue.set(null);
        this.operation.set(null);
        this.waitingForNewValue.set(true);

        return JSON.stringify(historyEntry);
      } catch (error) {
        this.currentValue.set('Error');
        this.expression.set('');
        this.previousValue.set(null);
        this.operation.set(null);
        this.waitingForNewValue.set(true);
        return '';
      }
    }
    return '';
  }

  // Clear
  clear(): void {
    this.currentValue.set('0');
    this.expression.set('');
    this.previousValue.set(null);
    this.operation.set(null);
    this.waitingForNewValue.set(false);
  }

  // Clear entry
  clearEntry(): void {
    this.currentValue.set('0');
    this.waitingForNewValue.set(false);
  }

  // Plus/Minus
  toggleSign(): void {
    const current = parseFloat(this.currentValue());
    if (current !== 0) {
      this.currentValue.set(String(-current));
    }
  }

  // Memory functions
  memoryClear(): void {
    this.memory.set(0);
  }

  memoryRecall(): void {
    this.currentValue.set(String(this.memory()));
    this.waitingForNewValue.set(true);
  }

  memoryStore(): void {
    this.memory.set(parseFloat(this.currentValue()));
  }

  memoryAdd(): void {
    this.memory.set(this.memory() + parseFloat(this.currentValue()));
  }

  memorySubtract(): void {
    this.memory.set(this.memory() - parseFloat(this.currentValue()));
  }

  // Update expression display
  private updateExpression(): void {
    const prev = this.previousValue();
    const op = this.operation();
    if (prev !== null && op) {
      this.expression.set(String(prev) + ' ' + op);
    }
  }

  // Format result
  private formatResult(num: number): string {
    // Handle very large or small numbers
    if (Math.abs(num) > 1e15 || (Math.abs(num) < 1e-10 && num !== 0)) {
      return num.toExponential(10);
    }
    
    // Format to remove unnecessary decimal places
    const rounded = Math.round(num * 1e10) / 1e10;
    return String(rounded);
  }

  // Set value directly (for functions like square root, square)
  setValue(value: number): void {
    this.currentValue.set(this.formatResult(value));
    this.waitingForNewValue.set(true);
  }

  // Set display value as string (for backspace)
  setDisplayValue(value: string): void {
    this.currentValue.set(value);
    this.waitingForNewValue.set(false);
  }

  // Backspace
  backspace(): void {
    const current = this.currentValue();
    if (current.length > 1 && current !== 'Error') {
      const newValue = current.slice(0, -1);
      if (newValue === '' || newValue === '-') {
        this.clearEntry();
      } else {
        this.setDisplayValue(newValue);
      }
    } else {
      this.clearEntry();
    }
  }

  // Get current state for history
  getCurrentState(): { expression: string; result: string } {
    return {
      expression: this.expression(),
      result: this.currentValue()
    };
  }
}

