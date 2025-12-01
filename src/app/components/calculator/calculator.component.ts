import { Component, OnInit, OnDestroy, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorService } from '../../services/calculator.service';
import { HistoryService } from '../../services/history.service';
import { CalculatorDisplayComponent } from '../calculator-display/calculator-display.component';
import { CalculatorButtonComponent, ButtonType } from '../calculator-button/calculator-button.component';
import { HistorySidebarComponent } from '../history-sidebar/history-sidebar.component';
import { CalculationHistory } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  imports: [
    CommonModule,
    CalculatorDisplayComponent,
    CalculatorButtonComponent,
    HistorySidebarComponent
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit, OnDestroy {
  isSidebarOpen = signal<boolean>(false);
  
  // Computed signal to ensure reactivity - directly read from the signal
  historyList = computed(() => {
    // Access the signal property directly to establish proper dependency tracking
    const signal = this.historyService.historyList;
    return signal();
  });

  constructor(
    public calculatorService: CalculatorService,
    public historyService: HistoryService
  ) {}

  ngOnInit(): void {
    // Component initialization
    // Log initial history state
    console.log('Calculator initialized. History count:', this.historyList().length);
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  // Keyboard support
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    const key = event.key;

    // Prevent default for calculator keys
    if (this.isCalculatorKey(key)) {
      event.preventDefault();
    }

    // Number keys
    if (key >= '0' && key <= '9') {
      this.onNumberClick(key);
    }
    // Decimal point
    else if (key === '.' || key === ',') {
      this.onDecimalClick();
    }
    // Operators
    else if (key === '+') {
      this.onOperatorClick('+');
    }
    else if (key === '-') {
      this.onOperatorClick('-');
    }
    else if (key === '*') {
      this.onOperatorClick('×');
    }
    else if (key === '/') {
      this.onOperatorClick('÷');
    }
    else if (key === '%') {
      this.onOperatorClick('%');
    }
    // Equals
    else if (key === '=' || key === 'Enter') {
      this.onEqualsClick();
    }
    // Clear
    else if (key === 'Escape' || key === 'c' || key === 'C') {
      this.onClearClick();
    }
    // Backspace
    else if (key === 'Backspace') {
      this.onBackspaceClick();
    }
    // History toggle
    else if (key === 'h' || key === 'H') {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        this.toggleSidebar();
      }
    }
  }

  private isCalculatorKey(key: string): boolean {
    return /[0-9+\-*/.=%]/.test(key) || 
           key === 'Enter' || 
           key === 'Escape' || 
           key === 'Backspace' ||
           (key.toLowerCase() === 'c' || key.toLowerCase() === 'h');
  }

  // Button handlers
  onNumberClick(num: string): void {
    this.calculatorService.inputNumber(num);
  }

  onDecimalClick(): void {
    this.calculatorService.inputDecimal();
  }

  onOperatorClick(op: string): void {
    this.calculatorService.setOperation(op);
  }

  onEqualsClick(): void {
    const historyEntry = this.calculatorService.performCalculation();
    if (historyEntry && historyEntry.trim() !== '') {
      try {
        const entry: CalculationHistory = JSON.parse(historyEntry);
        console.log('Adding to history:', entry);
        this.historyService.addEntry(entry);
        // Force update check
        setTimeout(() => {
          console.log('Current history list:', this.historyList());
        }, 100);
      } catch (error) {
        console.error('Failed to parse history entry:', error, historyEntry);
      }
    }
  }

  onClearClick(): void {
    this.calculatorService.clear();
  }

  onClearEntryClick(): void {
    this.calculatorService.clearEntry();
  }

  onToggleSignClick(): void {
    this.calculatorService.toggleSign();
  }

  // Memory functions
  onMemoryClear(): void {
    this.calculatorService.memoryClear();
  }

  onMemoryRecall(): void {
    this.calculatorService.memoryRecall();
  }

  onMemoryStore(): void {
    this.calculatorService.memoryStore();
  }

  onMemoryAdd(): void {
    this.calculatorService.memoryAdd();
  }

  onMemorySubtract(): void {
    this.calculatorService.memorySubtract();
  }

  onBackspaceClick(): void {
    this.calculatorService.backspace();
  }

  onSquareRootClick(): void {
    const current = parseFloat(this.calculatorService.displayValue());
    if (current >= 0) {
      const result = Math.sqrt(current);
      this.calculatorService.setValue(result);
    } else {
      this.calculatorService.setValue(0);
    }
  }

  onSquareClick(): void {
    const current = parseFloat(this.calculatorService.displayValue());
    const result = current * current;
    this.calculatorService.setValue(result);
  }

  // Sidebar
  toggleSidebar(): void {
    this.isSidebarOpen.update(open => !open);
    // Debug: Log history when sidebar opens
    if (!this.isSidebarOpen()) {
      console.log('Sidebar opening. Current history:', this.historyList());
      console.log('History count:', this.historyList().length);
    }
  }

  closeSidebar(): void {
    this.isSidebarOpen.set(false);
  }

  onClearHistory(): void {
    this.historyService.clearHistory();
  }

  onHistoryEntrySelect(entry: CalculationHistory): void {
    // Set the result as current value when user clicks on history entry
    const result = parseFloat(entry.result);
    if (!isNaN(result)) {
      this.calculatorService.setValue(result);
    }
  }
}

