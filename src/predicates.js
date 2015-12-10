export function isObject(el) {
  if (el === null || Array.isArray(el)) {
    return false;
  }
  return typeof el === 'object';
}

export function isArray(el) {
  return Array.isArray(el);
}

export function isString(el) {
  return typeof el === 'string';
}

export function isNumber(el) {
  if (isNaN(el) || el === null) {
    return false;
  }
  return typeof el === 'number';
}

