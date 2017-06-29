exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr)
  },

  speak: function(fn, obj) {
    return fn.apply(obj)
  },

  functionFunction: function(strBegin) {
    return function(strEnd){
      return `${strBegin}, ${strEnd}`
    }
  },

  makeClosures: function(arr, fn) {
    fn(arr)
    return arr
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {
    let args = Array.from(arguments);
    return args.reduce((acc, n) => acc + n)
  },

  callIt: function(fn) {
    let args = Array.from(arguments);
    return fn(...args)
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
