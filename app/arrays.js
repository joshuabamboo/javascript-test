exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((accumulate, n) => accumulate + n)
  },

  remove: function(arr, item) {

  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    let count = 0
    arr.forEach(function(element){
      if (item === element) {
        count++
      }
    })
    return count
  },

  duplicates: function(arr) {
    arr.forEach(function(element){

    })
  },

  square: function(arr) {
    return arr.map(function(element) {
      return element*element
    })
  },

  findAllOccurrences: function(arr, target) {
    let indices = []
    arr.map(function(element, i) {
      if (element === target) {
        indices.push(i)
      }
    })
    return indices
  }
};
