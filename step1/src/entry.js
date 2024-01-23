import { mod as a }from "./a.js"
import { mod as b } from "./b.js"

function hello(msg) {
	console.log('hello msg', msg)
	console.log('mod-a = ', a)
	console.log('mod-b = ', b)
}

hello('111')
