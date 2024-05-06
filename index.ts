#! /usr/bin/env node

console.log("\x1b[1m\x1b[36m"); // Set text to bold and cyan color
console.log("*******************************************");
console.log("*             Simple Calculator            *");
console.log("*******************************************");
console.log("\x1b[0m"); // Reset text formatting

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  { message: "Enter first number: ", type: "number", name: "firstNumber" },
  { message: "Enter second number: ", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation", "Modulus"],
  },
]);

//Conditional operator
if (answer.operator === "Addition") {
    console.log(chalk.gray(`\nThe addition of ${answer.firstNumber} & ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`));
} else if (answer.operator === "Subtraction") {
    console.log(chalk.yellow(`\nThe subtraction of ${answer.firstNumber} & ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`));
} else if (answer.operator === "Multiplication") {
    console.log(chalk.grey(`\nThe multiplication of ${answer.firstNumber} & ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`));
} else if (answer.operator === "Division") {
    console.log(chalk.green(`\nThe division of ${answer.firstNumber} & ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`));
} else if (answer.operator === "Exponentiation") {
    console.log(chalk.magenta(`\nThe exponent value of ${answer.firstNumber} is: ${answer.firstNumber ** answer.secondNumber}`));
} else if (answer.operator === "Modulus") {
    console.log(chalk.green(`\nThe modulus (reminder) becomes: ${answer.firstNumber % answer.secondNumber}`));
} else {
    console.log("Please select valid operator")
};