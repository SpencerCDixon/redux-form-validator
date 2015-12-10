/*
 What types of validation do I want to be able to do?
 *  is the element present
 *  is it comma separated list?
 *  is it unique?
 *  is it a date?
 *  is it a time?
 *  does it comply with a specific regex format?
 *  is it inside a specific length?
 *  numericality
 *  email address
 *  exclusion
 *  format
 *  inclusion
 *  length -> min/max/is
 *  numericality -> t/f
 *  allow custom messages
*/

/*
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  return errors;
}
*/

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
