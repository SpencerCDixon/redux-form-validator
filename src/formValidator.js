function KeyError(msg) {
  this.message = msg;
  this.name = "KeyError";
}

export function formValidator(fields) {
  var errors = {};
  var fieldKeys = Object.keys(fields);

  return function(values) {

    for (var key in values) {
      console.log(key);
      if (key in fields) {
        console.log('Key is there:', key)
      } else {
        var msg = key + " key wasn't found";
        throw new KeyError(msg)
      }
    }

  }
}
