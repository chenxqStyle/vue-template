
/**
 * 深拷贝
 */
export const deepClone = source => {
  if (!source || typeof source !== "object") {
    throw new Error("error arguments", "shallowClone");
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === "object") {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
};
/**
 * 浅拷贝
 */
export const shallowClone = source => {
  if (!source || typeof source !== "object") {
    throw new Error("error arguments");
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      targetObj[keys] = source[keys];
    }
  }
  return targetObj;
};

//判断是否数组
export const isArray = source => {
  if (!source) {
    return false;
  }
  if (typeof source == "object" && source.constructor == Array) {
    return true;
  }
  return false;
};