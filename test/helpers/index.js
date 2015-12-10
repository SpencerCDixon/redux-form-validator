export function cloneWithoutKey(obj, key) {
  let object = Object.assign({}, obj);
  delete object[key];
  return object
}
