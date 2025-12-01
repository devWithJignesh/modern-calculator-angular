# 🧮 Modern Calculator - Angular

A beautiful, feature-rich calculator web application built with Angular 20.2.0, featuring a modern Material Design-inspired UI, full calculation history, memory functions, and keyboard support.

![Calculator](https://img.shields.io/badge/Angular-20.2.0-red) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Installation](#installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Features Breakdown](#-features-breakdown)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎨 Modern UI Design
- Clean, Material Design-inspired interface
- Responsive layout for all screen sizes
- Smooth animations and transitions
- Professional gradient backgrounds
- Highlighted equals button with accent color
- Beautiful history sidebar with animations

### 🔢 Core Calculator Operations
- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Advanced Functions**: Percentage (%), Square Root (√), Square (x²), Sign Toggle (±)
- Multi-step calculations support
- Decimal point operations
- Error handling for edge cases (division by zero, etc.)

### 💾 Memory Functions
- **MC** - Memory Clear: Clears the memory
- **MR** - Memory Recall: Recalls the stored value
- **M+** - Memory Add: Adds current value to memory
- **M-** - Memory Subtract: Subtracts current value from memory
- **MS** - Memory Store: Stores current value in memory
- Visual memory indicator in display when memory has value

### 📜 History System
- Complete calculation history tracking
- Scrollable history sidebar with smooth animations
- Real-time history updates (no page refresh needed)
- Persistent storage using localStorage
- Click on history entry to reuse result in calculator
- Clear history functionality
- Timestamp for each calculation
- Beautiful single-line display format

### ⌨️ Keyboard Support
Full keyboard support for all operations:
- **Numbers**: `0-9`
- **Operators**: `+`, `-`, `*`, `/`, `%`
- **Decimal**: `.` or `,`
- **Equals**: `=` or `Enter`
- **Clear**: `C` or `Escape`
- **Backspace**: `Backspace`
- **History**: `Ctrl+H` or `Cmd+H` (Mac)

### 📱 Responsive Design
- Mobile-friendly interface
- Tablet and desktop optimized
- Touch-friendly button sizes
- Adaptive layout that works on all devices

## 🖼️ Screenshots

### Calculator Interface
- Modern Material Design UI
- Clean button layout
- Professional display area
- Memory indicator

### History Sidebar
- Animated sidebar with smooth transitions
- Single-line history entries
- Click to reuse calculations
- Clear history button

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **Angular CLI** (v20.2.0) - Install globally with `npm install -g @angular/cli`

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/devWithJignesh/modern-calculator-angular.git
cd modern-calculator-angular
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
ng serve
```

4. **Open your browser and navigate to:**
```
http://localhost:4200
```

The application will automatically reload whenever you modify any of the source files.

### Build for Production

To create a production build:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## 🎯 Usage

### Basic Calculations
1. Enter numbers using the number pad or keyboard
2. Select an operator (+, -, ×, ÷)
3. Enter the second number
4. Press `=` or `Enter` to get the result

### Memory Functions
1. **Store a value**: Enter a number and press `MS`
2. **Recall memory**: Press `MR` to use the stored value
3. **Add to memory**: Calculate a result and press `M+`
4. **Subtract from memory**: Calculate a result and press `M-`
5. **Clear memory**: Press `MC` to clear the stored value

### History Features
1. **View history**: Click the hamburger menu (☰) icon in the top right
2. **Reuse calculation**: Click on any history entry to use its result
3. **Clear history**: Click "Clear All History" button in the sidebar

### Advanced Functions
- **Percentage**: Enter a number, press `%` to calculate percentage
- **Square Root**: Enter a number and press `√`
- **Square**: Enter a number and press `x²`
- **Sign Toggle**: Press `±` to change the sign of the current number

## 🏗️ Project Structure

```
Calculator/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── calculator/              # Main calculator component
│   │   │   │   ├── calculator.component.ts
│   │   │   │   ├── calculator.component.html
│   │   │   │   └── calculator.component.css
│   │   │   ├── calculator-button/      # Reusable button component
│   │   │   │   ├── calculator-button.component.ts
│   │   │   │   ├── calculator-button.component.html
│   │   │   │   └── calculator-button.component.css
│   │   │   ├── calculator-display/     # Display component
│   │   │   │   ├── calculator-display.component.ts
│   │   │   │   ├── calculator-display.component.html
│   │   │   │   └── calculator-display.component.css
│   │   │   └── history-sidebar/        # History sidebar component
│   │   │       ├── history-sidebar.component.ts
│   │   │       ├── history-sidebar.component.html
│   │   │       └── history-sidebar.component.css
│   │   ├── services/
│   │   │   ├── calculator.service.ts   # Calculator logic and state
│   │   │   └── history.service.ts      # History management
│   │   ├── app.ts                       # Root component
│   │   └── app.html                     # Root template
│   └── styles.css                       # Global styles
├── angular.json                         # Angular configuration
├── package.json                         # Dependencies
├── tsconfig.json                        # TypeScript configuration
└── README.md                            # Project documentation
```

## 🛠️ Technologies Used

- **Angular 20.2.0** - Modern frontend framework
- **TypeScript 5.9.2** - Type-safe programming language
- **Angular Signals** - Reactive state management
- **CSS3** - Modern styling with gradients and animations
- **localStorage API** - Client-side data persistence
- **RxJS 7.8.0** - Reactive programming

## 📋 Features Breakdown

### Calculator Service
The `CalculatorService` manages all calculator operations:
- State management using Angular signals
- Mathematical operations (+, -, ×, ÷, %)
- Memory management (MC, MR, M+, M-, MS)
- Expression building and evaluation
- Error handling
- Value formatting

### History Service
The `HistoryService` handles calculation history:
- Stores all calculations with timestamps
- localStorage persistence
- Real-time updates using signals
- History management (add, clear, load)
- Automatic save/load functionality

### Components Architecture

#### Calculator Component
- Main container component
- Manages button grid layout
- Handles keyboard events
- Coordinates between display, buttons, and sidebar

#### Calculator Display Component
- Shows current expression
- Displays calculation result
- Memory indicator
- Responsive text sizing

#### Calculator Button Component
- Reusable button with different types
- Number, operator, function, equals, memory buttons
- Material Design styling
- Hover and active states

#### History Sidebar Component
- Animated sidebar with overlay
- History list display
- Single-line entry format
- Click to reuse calculations
- Clear history functionality

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Enter numbers |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Percentage |
| `.` or `,` | Decimal point |
| `=` or `Enter` | Calculate result |
| `C` or `Escape` | Clear all |
| `Backspace` | Delete last digit |
| `Ctrl+H` / `Cmd+H` | Toggle history sidebar |

## 🔧 Development

### Run Tests
```bash
ng test
```

### Code Linting
```bash
ng lint
```

### Generate Component
```bash
ng generate component component-name
```

### Build Analysis
```bash
ng build --stats-json
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Jignesh Lakum**
- GitHub: [@devWithJignesh](https://github.com/devWithJignesh)
- Repository: [modern-calculator-angular](https://github.com/devWithJignesh/modern-calculator-angular)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Material Design for UI inspiration
- All contributors and users
- Open source community

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

⭐ If you find this project helpful, please give it a star on GitHub!

🔗 **Repository**: [https://github.com/devWithJignesh/modern-calculator-angular](https://github.com/devWithJignesh/modern-calculator-angular)

