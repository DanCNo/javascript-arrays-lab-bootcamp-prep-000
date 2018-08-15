// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newKittensArray = kittens.concat(name)
  return newKittensArray
}
var kittens = ['joe', 'pic']

function prependKitten(name) {
  console.log(kittens)
  var newKittensArray = kittens.splice(0, 0, name)
  return newKittensArray
}

prependKitten('bob')

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}
