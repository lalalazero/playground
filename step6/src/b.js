import share from './share.js'

import(/* webpackChunkName: "dynamic-chunk-1" */ "./dynamic.js").then((mod) => {
  console.log(mod)
})