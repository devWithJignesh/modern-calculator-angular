# 🧮 Modern Calculator - Angular

A beautiful, feature-rich calculator web application built with Angular 20.2.0, featuring a modern Material Design-inspired UI, full calculation history, memory functions, and keyboard support.

![Calculator](https://img.shields.io/badge/Angular-20.2.0-red) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 Modern UI Design
- Clean, Material Design-inspired interface
- Responsive layout for all screen sizes
- Smooth animations and transitions
- Professional gradient backgrounds
- Highlighted equals button with accent color

### 🔢 Core Calculator Operations
- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Advanced Functions**: Percentage (%), Square Root (√), Square (x²), Sign Toggle (±)
- Multi-step calculations support
- Decimal point operations
- Error handling for edge cases

### 💾 Memory Functions
- **MC** - Memory Clear
- **MR** - Memory Recall
- **M+** - Memory Add
- **M-** - Memory Subtract
- **MS** - Memory Store
- Visual memory indicator in display

### 📜 History System
- Complete calculation history tracking
- Scrollable history sidebar with smooth animations
- Real-time history updates
- Persistent storage using localStorage
- Click on history entry to reuse result
- Clear history functionality
- Timestamp for each calculation

### ⌨️ Keyboard Support
- Number keys: `0-9`
- Operators: `+`, `-`, `*`, `/`, `%`
- Decimal: `.` or `,`
- Equals: `=` or `Enter`
- Clear: `C` or `Escape`
- Backspace: `Backspace`
- History: `Ctrl+H` or `Cmd+H` (Mac)

### 📱 Responsive Design
- Mobile-friendly interface
- Tablet and desktop optimized
- Touch-friendly button sizes
- Adaptive layout

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v20.2.0)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-calculator-angular.git
cd modern-calculator-angular
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to:
```
http://localhost:4200
```

### Build for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 🏗️ Project Structure

```
Calculator/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── calculator/          # Main calculator component
│   │   │   ├── calculator-button/   # Reusable button component
│   │   │   ├── calculator-display/  # Display component
│   │   │   └── history-sidebar/     # History sidebar component
│   │   ├── services/
│   │   │   ├── calculator.service.ts    # Calculator logic
│   │   │   └── history.service.ts       # History management
│   │   └── app.ts                       # Root component
│   └── styles.css                       # Global styles
├── angular.json
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **Angular 20.2.0** - Frontend framework
- **TypeScript 5.9.2** - Programming language
- **Angular Signals** - Reactive state management
- **CSS3** - Styling with modern features
- **localStorage API** - Persistent data storage

## 📋 Features Breakdown

### Calculator Service
- Manages calculator state using Angular signals
- Handles all mathematical operations
- Memory management
- Expression building and evaluation

### History Service
- Stores calculation history
- localStorage persistence
- Real-time updates
- History management (add, clear, load)

### Components
- **Calculator Component**: Main container with button grid
- **Calculator Display**: Shows expression and result
- **Calculator Button**: Reusable button with different types
- **History Sidebar**: Animated sidebar with history list

## 🎯 Usage

1. **Basic Calculation**: Enter numbers and operators, press `=` or `Enter`
2. **Memory Functions**: Use MC, MR, M+, M-, MS buttons
3. **View History**: Click the hamburger menu (☰) to open history sidebar
4. **Reuse Result**: Click on any history entry to use its result
5. **Clear**: Press `C` or `Escape` to clear all, or `CE` to clear entry

## 🔧 Development

### Run Tests
```bash
ng test
```

### Code Linting
```bash
ng lint
```

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created with ❤️ using Angular

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Material Design for UI inspiration
- All contributors and users

---

⭐ If you find this project helpful, please give it a star!
