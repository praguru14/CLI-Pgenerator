#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPass = require('./utils/createPass')
const savePassword = require('./utils/savePass')
program.version('1.0.0').description('Pass generator')
program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

const {length,save,numbers,symbols} = program.opts()
//generate password
const pass = createPass(length,numbers,symbols)
if(save){
    savePassword(pass)
}
clipboardy.writeSync(pass)


console.log(chalk.blue('Password is ')+ chalk.bold(pass))
console.log(chalk.green('Your new password is now copied to the clipboard'))