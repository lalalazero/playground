import { share } from './share.js'
import { mod as b } from "./b.js"

const home = 'home ' + share + b

function load() {
    console.log(home)
}

load()