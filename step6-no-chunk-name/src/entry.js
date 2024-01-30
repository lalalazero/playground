import a from "./a.js"

import(/* webpackChunkName: "async-chunk-0" */ './b.js')
import("./dynamic.js").then((mod) => {
  console.log(mod)
})
