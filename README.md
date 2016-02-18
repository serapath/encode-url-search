# encodeURLsearch
encode search query

## example

```js
  var encodeURLsearch = require('encode-url-search')
  var search = encodeURLsearch({ emse: 'kremse' })
  console.log(search)
  // => "?emse=kremse"
  search = encodeURLsearch({ emse: ['kremse', 'bemse'] })
  console.log(search)
  // => "?emse=kremse&emse=bemse"
  search = encodeURLsearch({ emse: { kremse: 'bemse' } })
  console.log(search)
  // => "?emse[kremse]=bemse"
```
