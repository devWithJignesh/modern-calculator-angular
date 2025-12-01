import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
