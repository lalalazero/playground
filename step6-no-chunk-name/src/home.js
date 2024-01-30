import b from "./b.js"

import(/* webpackChunkName: "chunk-not-exist" */ './not-exist.js')
import("./dynamic.js").then((mod) => {
  console.log(mod)
})
