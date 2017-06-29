exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return str.match(/\d/) ? true : false
  },

  containsRepeatingLetter: function(str) {
    return str.match(/(\D)\1/) ? true : false
  },

  endsWithVowel: function(str) {
    return str.match(/[aeiouAEIOU]$/) ? true : false
  },

  captureThreeNumbers: function(str) {
    let match = str.match(/\d{3}/)
    return str.match(/\d{3}/) ? match[0] : false
  },

  matchesPattern: function(str) {
    return str.match(/^\d{3}-\d{3}-\d{4}$/) ? true : false
  },

  isUSD: function(str) {
    return str.match(/^\$[0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2})?$/) ? true : false
  }
};
