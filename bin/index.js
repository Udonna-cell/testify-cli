#!/usr/bin/env node
import fs from "fs"
import chalk from "chalk"
import prompts from 'prompts'
import shell from 'shelljs';
import maker from "../dict/maker.js"
const argument = process.argv.slice(2)
let [command, ...flags] = argument

if (command == "new" && (flags.length == 2 || flags.length == 1)){
  let msg = "Crearing a problem folder ....."
  console.log(chalk.gray(msg))
  maker(flags)
} else {
  console.log("Argument length can't be more than 2")
}






// shell.exec("pwd");

// (async () => {
//   const response = await prompts({
//     type: 'text',
//     name: 'meaning',
//     message: 'What is the meaning of life?'
//   });

//   console.log(response.meaning);
// })();

// console.log(chalk.red("working"))
// let argument = process.argv.slice(2)

// console.log(__dirname)