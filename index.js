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

var kittens = ['bob', 'joe']

function prependKitten(name) {
  console.log(kittens)
  var newKittensArray = [name]
  newKittensArray.concat(kittens)
  console.log(kittens)
  return newKittensArray
}

prependKitten('pie')
console.log(kittens)

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}
