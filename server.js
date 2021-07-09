const program = require('commander')
const createPass = require('./utils/createPass')
program.version('1.0.0').description('Pass generator')
program
  .option('-l, --length <number>', 'length of password', 8)
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

const {length,save,numbers,symbols} = program.opts()



//generate password
const pass = createPass(length,numbers,symbols)

console.log(pass)