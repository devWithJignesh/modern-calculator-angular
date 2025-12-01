import { Injectable, signal } from '@angular/core';
import { CalculationHistory } from './calculator.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history = signal<CalculationHistory[]>([]);

  public readonly historyList = this.history.asReadonly();

  constructor() {
    // Load history from localStorage if available
    this.loadHistory();
  }

  addEntry(entry: CalculationHistory): void {
    // Add entry to history
    this.history.update(history => [entry, ...history]);
    // Save to localStorage immediately
    this.saveHistory();
    console.log('History entry added and saved. Total entries:', this.history().length);
  }

  clearHistory(): void {
    this.history.set([]);
    this.saveHistory();
    console.log('History cleared');
  }

  // Public method to get current history count (for debugging)
  getHistoryCount(): number {
    return this.history().length;
  }

  // Force reload from localStorage (for debugging)
  reloadFromStorage(): void {
    this.loadHistory();
  }

  private saveHistory(): void {
    try {
      const currentHistory = this.history();
      const historyData = currentHistory.map(entry => ({
        expression: entry.expression,
        result: entry.result,
        timestamp: entry.timestamp.toISOString()
      }));
      localStorage.setItem('calculator-history', JSON.stringify(historyData));
      console.log('History saved to localStorage:', historyData.length, 'entries');
    } catch (error) {
      console.error('Failed to save history to localStorage:', error);
    }
  }

  private loadHistory(): void {
    try {
      const saved = localStorage.getItem('calculator-history');
      if (saved) {
        const historyData = JSON.parse(saved);
        const loadedHistory = historyData.map((entry: any) => {
          // Ensure timestamp is a proper Date object
          let timestamp: Date;
          if (entry.timestamp instanceof Date) {
            timestamp = entry.timestamp;
          } else if (typeof entry.timestamp === 'string') {
            timestamp = new Date(entry.timestamp);
          } else {
            // Fallback to current date if invalid
            timestamp = new Date();
          }
          
          return {
            expression: entry.expression,
            result: entry.result,
            timestamp: timestamp
          };
        });
        this.history.set(loadedHistory);
        console.log('History loaded from localStorage:', loadedHistory.length, 'entries');
      } else {
        console.log('No history found in localStorage');
      }
    } catch (error) {
      console.error('Failed to load history from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('calculator-history');
    }
  }
}

