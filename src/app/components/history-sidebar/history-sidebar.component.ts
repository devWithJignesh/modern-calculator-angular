import { Component, input, output, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationHistory } from '../../services/calculator.service';

@Component({
  selector: 'app-history-sidebar',
  imports: [CommonModule],
  templateUrl: './history-sidebar.component.html',
  styleUrl: './history-sidebar.component.css'
})
export class HistorySidebarComponent implements OnInit {
  isOpen = input<boolean>(false);
  history = input.required<CalculationHistory[]>();
  
  closeSidebar = output<void>();
  clearHistory = output<void>();
  selectEntry = output<CalculationHistory>();

  constructor() {
    // Effect to track history changes (for future use)
    effect(() => {
      this.history(); // Track changes
    });
  }

  ngOnInit(): void {
    // Component initialized
  }

  onClose(): void {
    this.closeSidebar.emit();
  }

  onClearHistory(): void {
    this.clearHistory.emit();
  }

  selectHistoryEntry(entry: CalculationHistory): void {
    this.selectEntry.emit(entry);
  }

  formatTime(date: Date | string): string {
    // Handle both Date objects and date strings
    const dateObj = date instanceof Date ? date : new Date(date);
    return dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  trackByTimestamp(index: number, entry: CalculationHistory): number {
    // Handle both Date objects and date strings
    if (entry.timestamp instanceof Date) {
      return entry.timestamp.getTime();
    } else if (typeof entry.timestamp === 'string') {
      return new Date(entry.timestamp).getTime();
    } else {
      // Fallback: use index if timestamp is invalid
      return index;
    }
  }
}

