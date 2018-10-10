#!/usr/bin/env node

const strategies = {
  programming: require('./programming'),
  eno: require('./eno')
}

function random(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

if (process.argv.indexOf('--eno') !== -1) {
  console.log(random(strategies.eno))
} else {
  console.log(random(strategies.programming))
}
