let result;



const number1 = parseFloat(prompt("Enter your first number:"));
const operator = prompt("Enter your operator(either +, -, / or *): ");
const number2 = parseFloat(prompt("Enter your second number:"));
// console.log("${number1} ${operator} ${number2} = ${result}");


switch(operator) {
    case '+':
         result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
         alert(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
         alert(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
         alert(`${number1} / ${number2} = ${result}`);
        break;

    default:
        alert('Invalid operator');
        break;
}
