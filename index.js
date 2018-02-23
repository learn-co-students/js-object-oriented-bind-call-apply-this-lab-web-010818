function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, args) {
  return fn.call(thisValue, args)
}

function setThisWithApply(fn, thisValue, ourArguments) {
  return fn.apply(thisValue, ourArguments)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const newFunct = functionToBeCopied.bind(thisValue)
  return newFunct
}