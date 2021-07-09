const crypto = require('crypto')

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPass = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha
  hasNumbers ? (chars += numbers) : ''
  hasSymbols ? (chars += symbols) : ''
  return genPass(length, chars)
}

const genPass = (length, chars) => {
  const random = crypto.randomBytes(length)
  let password = ''

  for (let i = 0; i < length; i++) {
 
    password += chars.charAt(random[i] % chars.length)
  }
  return password
}
module.exports = createPass