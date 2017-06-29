exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let previousChar
    let uniqueChars = []
    for (var i = 0; i < str.length; i++) {
      if (previousChar != str[i]) {
        charCount = str.match(new RegExp(str[i], "g")).length
        for (var j = 0; j < amount && j < charCount; j++) {
          uniqueChars.push(str[i])
        }
      }
      previousChar = str[i]
    }
    return uniqueChars.join('')
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    let reversedStr = ''
    for (var i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i] 
    }
    return reversedStr
  }
};
