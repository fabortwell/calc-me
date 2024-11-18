# Calculator Project

A simple calculator application built with HTML, CSS, and JavaScript. The project supports basic arithmetic operations and provides an interactive interface for performing calculations.

---

## Features

- **Basic Operations**: Supports addition, subtraction, multiplication, and division.
- **Chained Calculations**: Handles sequential operations intelligently (e.g., 12 + 7 - 5).
- **Rounded Results**: Avoids display overflow by rounding results with long decimals.
- **Clear Functionality**: Resets all stored data and the display for a fresh start.
- **Error Handling**: Displays an error message when attempting to divide by zero.
- **Interactive Display**: Updates the display in real-time as users interact with buttons.

---

## Usage

1. **Arithmetic Operations**  
   - Enter the first number using the digit buttons.  
   - Select an operator (+, -, *, /).  
   - Enter the second number.  
   - Press `=` to calculate and display the result.  

2. **Chained Operations**  
   - After getting a result (e.g., 12 + 7 = 19), continue with another operator and number.  
   - The calculator will use the current result as the starting number for the next operation.  

3. **Clear Button**  
   - Press `AC (allclear)` to reset the calculator and start fresh.  

4. **Error Handling**  
   - Division by zero results in a snarky error message, ensuring the calculator remains stable.  

---

## Implementation Details

1. **Core Functions**  
   - **add(a, b)**: Adds two numbers.  
   - **subtract(a, b)**: Subtracts the second number from the first.  
   - **multiply(a, b)**: Multiplies two numbers.  
   - **divide(a, b)**: Divides the first number by the second, with a check for division by zero.

2. **Operate Function**  
   - **operate(operator, a, b)**: Determines the operation based on the selected operator and calls the appropriate function.

3. **Display Management**  
   - A dynamic display shows numbers and results in real-time. The display updates whenever a digit or operator is selected.

4. **User Interaction**  
   - Buttons for digits, operators, and special functions (`=`, `Clear`) trigger the respective logic to perform calculations or reset the calculator.

5. **Handling Edge Cases**  
   - Prevents invalid operations (e.g., pressing `=` without enough inputs).  
   - Resets seamlessly after pressing `Clear`.

---

## Getting Started

### Prerequisites

- A modern browser to run the calculator locally.

### Installation

1. Clone the repository or download the files.
2. Open the `index.html` file in your browser to use the calculator.

---

## Challenges & Lessons Learned

- **Handling Sequential Operations**: Ensuring that each new operation uses the last result effectively.
- **UI Overflow**: Implementing rounding to maintain clean visuals on the display.
- **Error Management**: Safeguarding against crashes (e.g., dividing by zero).

---

## Future Enhancements

- Add a history feature to show past calculations.
- Enhance the UI with better styling.
- Expand functionality to include advanced operations (e.g., square root, exponentiation).

---

## License

This project is licensed under the MIT License.

--- 

Feel free to tweak the language or structure further to match your style or project specifics!
