

function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  let x = functionToBeCopied.bind(thisValue);

  return x;

}


// returnsThisAndArgs = function(){
//   return {
//     thisValue: this,
//     arguments: Array.from(arguments)} }
//
// bob = {name: 'bob'}
// age = 18
