'use strict'
module.exports = encodeURLsearch

function encodeURLsearch (obj, prevKey, sep) {
  var result = '', sep = sep || '?'
  for (var key in obj) {
    const val = obj[key]
    const gkey = !prevKey ? key : (prevKey + '[' + key + ']')
    if (Array.isArray(val)) val.forEach(function (subval) { set(gkey, subval) })
    else if (typeof val !== 'object') set(gkey, val)
    else result += stringify(val, gkey, sep)
  }
  function set(gkey, val) {
    result += sep + gkey + '=' + val
    if (sep === '?') sep = '&'
  }
  return result
}
