#! /usr/bin/env node    
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let conditions = true;
while (conditions) {
    let todoAns = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.bold.magentaBright("What you want to add in your Todos list?")
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.bold.bold.magentaBright("Do you want to add more?"),
            default: "false",
        },
    ]);
    // console.log(todoAns.todo);
    todos.push(todoAns.todo);
    console.log(chalk.blueBright(todos));
    conditions = todoAns.addMore;
    if (!todoAns.addMore) {
        let tododeleted = await inquirer.prompt([
            {
                name: "delete",
                type: "confirm",
                message: chalk.bold.magentaBright("you want to delete anything in todo? "),
                default: "false",
            },
        ]);
        if (tododeleted.delete) {
            let deleteAns = await inquirer.prompt([
                {
                    name: "index",
                    message: chalk.bold.greenBright("Select an element which you want to delete and choices todos:"),
                    type: "list",
                    choices: todos,
                },
            ]);
            let index = todos.indexOf(deleteAns.index);
            todos.splice(index, 1);
            console.log(chalk.bold.blueBright(todos));
            conditions = false;
        }
    }
}
;
