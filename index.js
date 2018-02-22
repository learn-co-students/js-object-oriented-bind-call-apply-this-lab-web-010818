function justInvoke(cb) {
  return cb();
}

function setThisWithCall(cb, reference, arg) {
  return cb.call(reference, arg);
}

function setThisWithApply(cb, reference, arguments) {
  return cb.apply(reference, Array.prototype.slice.call(arguments));
}

function returnNewFunctionOf(cb, reference) {
  return cb.bind(reference);
}
