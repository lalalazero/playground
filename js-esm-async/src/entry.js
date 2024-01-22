import a from "./a.js"
import b from "./b.js"

function hello(msg) {
	console.log('hello msg', msg)
	if (msg) {
		a.load()
		b.load()
		// import(
		// 	/* webpackChunkName: "chunk-foo" */
		// 	"./share.js").then((mod) => {
		// 	console.log("foo is ", mod)
		// })

		// import(
		// 	/* webpackChunkName: "chunk-a" */
		// 	'./a.js').then(mod => {
		// 	mod.y()
		// })
	}
}

hello('111')
