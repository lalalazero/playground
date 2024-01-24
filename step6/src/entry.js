import a from "./a.js"

import(/* webpackChunkName: "async-chunk-0" */ './b.js')
import(/* webpackChunkName: "dynamic-chunk-1" */ "./dynamic.js").then((mod) => {
  console.log(mod)
})
