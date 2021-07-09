  
const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const savePassword = (pass) => {
  fs.open(path.join(__dirname, '../', 'pass.txt'), 'a', 666, (e, id) => {
    fs.write(id, pass + os.EOL, null, 'utf-8', () => {
        console.log(id,pass)
      fs.close(id, () => {
        console.log(chalk.green('Password saved to pass.txt'))
      })
    })
  })
}

module.exports = savePassword