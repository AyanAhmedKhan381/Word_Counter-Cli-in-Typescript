#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("=".repeat(70)));
console.log(chalk.yellow("  (っ◔◡◔)っ 💘♟ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞_𝐓𝐨_𝐂𝐨𝐝𝐞_𝐖𝐢𝐭𝐡_𝐀𝐲𝐚𝐧  ♢💙 (っ◔◡◔)っ"));
console.log(chalk.red("=".repeat(70)));
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "E͎n͎t͎e͎r͎ ͎a͎ ͎s͎e͎n͎t͎e͎n͎c͎e͎",
    }
]);
let words = answer.sentence.trim().split(" ");
console.log(chalk.yellow("=".repeat(60)));
console.log(chalk.bold("- Se͎n͎t͎e͎n͎c͎e͎ ͎Wo͎r͎d͎"));
console.log(words);
console.log(chalk.magenta(`\n - W͎o͎r͎d͎ ͎c͎o͎u͎n͎t͎ : ${chalk.bold.redBright(words.length)}`));
console.log(chalk.yellow("=".repeat(60)));
