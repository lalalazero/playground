import b from "./b.js"

import(/* webpackChunkName: "chunk-not-exist" */ './not-exist.js')
import(/* webpackChunkName: "dynamic-chunk-1" */ "./dynamic.js").then((mod) => {
  console.log(mod)
})
