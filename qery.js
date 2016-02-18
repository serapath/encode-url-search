'use strict'
module.exports = qery

function qery (obj, prevKey, sep) {
  var result = '', sep = sep || '?'
  for (var key in obj) {
    var val = obj[key]
    if (val===undefined) continue
    var gkey = !prevKey ? key : (prevKey + '.' + key)
    if (Array.isArray(val)) val.forEach(function (subval) { set(gkey, subval) })
    else if (typeof val !== 'object') set(gkey, val)
    else result += qery(val, gkey, sep)
  }
  function set(gkey, val) {
    result += sep + gkey + '=' + val
    if (sep === '?') sep = '&'
  }
  return result
}
