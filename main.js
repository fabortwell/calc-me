const display = document.getElementById("display");

// Append input to the display
function appendToDisplay(input) {
    display.value += input;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Function to evaluate the expression
function calculate() {
    try {
        const result = evaluateExpression(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Function to evaluate mathematical expressions
function evaluateExpression(expression) {
    // Replace special symbols
    expression = expression.replace(/÷/g, "/");
    expression = expression.replace(/%/g, "/100");

    // Parse and calculate using a stack-based algorithm
    const tokens = tokenize(expression);
    const postfix = infixToPostfix(tokens);
    return evaluatePostfix(postfix);
}

// Tokenize the input expression
function tokenize(expression) {
    const regex = /(\d+\.?\d*|\.\d+|[+\-*/()])/g;
    return expression.match(regex) || [];
}

// Convert infix expression to postfix
function infixToPostfix(tokens) {
    const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };
    const output = [];
    const operators = [];

    for (const token of tokens) {
        if (!isNaN(token)) {
            output.push(token); // Numbers go directly to the output
        } else if (token === "(") {
            operators.push(token);
        } else if (token === ")") {
            while (operators.length && operators[operators.length - 1] !== "(") {
                output.push(operators.pop());
            }
            operators.pop(); // Remove the "("
        } else {
            while (
                operators.length &&
                precedence[token] <= precedence[operators[operators.length - 1]]
            ) {
                output.push(operators.pop());
            }
            operators.push(token);
        }
    }

    while (operators.length) {
        output.push(operators.pop());
    }

    return output;
}

// Evaluate postfix expression
function evaluatePostfix(postfix) {
    const stack = [];

    for (const token of postfix) {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    if (b === 0) throw new Error("Division by zero");
                    stack.push(a / b);
                    break;
            }
        }
    }

    return stack[0];
}
