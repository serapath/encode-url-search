# qery
encode search qery

## example

```js
  var qery = require('qery')
  var search = qery({ emse: 'kremse' })
  console.log(search)
  // => "?emse=kremse"
  search = qery({ emse: ['kremse', 'bemse'] })
  console.log(search)
  // => "?emse=kremse&emse=bemse"
  search = qery({ emse: { kremse: 'bemse' } })
  console.log(search)
  // => "?emse.kremse=bemse"
```
## roadmap
* add decoding (=parsing) functionality
