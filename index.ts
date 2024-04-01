#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5 + 1);

console.log("Welcome To Number Guessing Game");

const answers = await inquirer.prompt([
    {
        name: "userGueesedNumber",
        type: "number",
        message: "Please guess a number between 1-5: ",
    }
]);

if (answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed right number.");
} else {
    console.log("You guessed wrong number");
}

