import { mod as a }from "./a.js"
import { mod as b } from "./b.js"

const click = () => {
    import('./dynamic.js').then(mod => {
        console.log(mod)
    })
}

function hello(msg) {
	console.log('hello msg', msg)
	console.log('mod-a = ', a)
	console.log('mod-b = ', b)

	click()
}

hello('111')
