export function deepFreeze(obj: any) {
  if (typeof obj !== 'object') return obj
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach(function(name) {
    var prop = obj[name];

    if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  return obj;
}