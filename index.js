const justInvoke = function(func){
  return func()
}


const setThisWithCall = function(func, thisValue, arg){
  return func.call(thisValue,arg)
}


const setThisWithApply = function (func, thisValue, arg){
  return func.apply(thisValue, arg)
}


const returnNewFunctionOf = function(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue)
}
