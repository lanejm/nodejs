const fs = require('fs')
const { text } = require('stream/consumers')

const textInput = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textInput)

const textOutput = `this is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}` 
fs.writeFileSync('./txt/output.txt', textOutput)
console.log('File written')