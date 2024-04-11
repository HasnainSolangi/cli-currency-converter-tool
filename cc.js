#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1, // Base currency
    PKR: 278,
    RUB: 92.58,
    Yuan: 7.23,
    INR: 83.30,
};
console.log(chalk.bgBlue("\n  Welcome to the Currency Converter Tool!"));
while (true) {
    let userAnswer = await inquirer.prompt([
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices: ["USD", "PKR", "RUB", "Yuan", "INR"]
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices: ["USD", "PKR", "RUB", "Yuan", "INR"]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        }
    ]);
    let fromAmount = currency[userAnswer.from]; // Exchange rate
    let toAmount = currency[userAnswer.to]; //Exchange rate
    let amount = userAnswer.amount;
    let baseAmount = amount / fromAmount; // PKR base currency
    let convertedAmount = baseAmount * toAmount;
    console.log(convertedAmount);
    let confirm = await inquirer.prompt([
        {
            name: 'action',
            type: "list",
            message: chalk.green("Would you like to continue or exit?"),
            choices: ['Continue', 'Exit']
        }
    ]);
    if (confirm.action === 'Exit') {
        console.log(chalk.red("Thank you for using Currency Converter Tool!"));
        break;
    }
}
