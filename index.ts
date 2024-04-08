#! /usr/bin/env node    

import inquirer from "inquirer";

let todos : string[] =[];
let conditions = true;

while (conditions) {
  let todoAns = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "What you want to add in your Todos list?",
    },
    {
      name: "addMore",
      type: "confirm",
      message: "Do you want to add more?",
      default: "false",
    },
  ]);
  // console.log(todoAns.todo);

  todos.push(todoAns.todo);

  console.log(todos);

  conditions = todoAns.addMore;

  if (!todoAns.addMore) {
    let tododeleted = await inquirer.prompt([
      {
        name: "delete",
        type: "confirm",
        message: "you want to delete anything in todo? ",
        default: "false",
      },
    ]);

    if (tododeleted.delete) {
      let deleteAns = await inquirer.prompt([
        {
          name: "index",
          message: "Select an element which you want to delete and choices todos:",
          type: "list",
          choices: todos,
        },
      ]);
      let index: number = todos.indexOf(deleteAns.index);
      todos.splice(index, 1);
      console.log(todos);

      conditions = false;
    } 
  }
}