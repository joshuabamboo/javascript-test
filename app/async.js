exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    
  },

  manipulateRemoteData: function(url) {
    return $.getJSON(url)
    
    .then(function(data) {
      let names = []
      for(var key in data){
        data[key].map(function(obj){
          let name = Object.keys(obj)[0]
          names.push(obj[name])
        })
      }
      return names.sort()
    })
  }
};
