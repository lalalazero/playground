// import a from "./mod-a.js"
import b from "./mod-b.js"

function hello(msg) {
	console.log('hello msg', msg)
	if (msg) {
		import(
			/* webpackChunkName: "chunk-foo" */
			"./foo.js").then((mod) => {
			console.log("foo is ", mod)
		})

		import(
			/* webpackChunkName: "chunk-a" */
			'./mod-a.js').then(mod => {
			mod.y()
		})
	}

	return {
		a,
		b,
	}
}

export { hello }
