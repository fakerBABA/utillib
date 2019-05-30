/**
 * 深拷贝
 * @param {object} source 
 * @return {object} new object
 */
function deepClone(source) {
  if (typeof source !== 'object') {
    return
  }

  if (source === null) {
    return null
  }

  let obj = {}

  for (let key in source) {
    const item = source[key]

    if (typeof item) { }
  }

  return obj
}

/**
 * @description is empty
 * @param {*} obj
 */
function isEmpty(obj) { }