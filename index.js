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

function prependKitten(name) {
  var newKittensArray = kittens
  newKittensArray.slice(0, 0, name)
  return newKittensArray
}

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}
