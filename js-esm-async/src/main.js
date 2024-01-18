// import a from "./mod-a.js"
import b from "./mod-b.js"

function hello(msg) {
	if (msg) {
		import(
			/* webpackChunkName: "chunk-foo-a" */
			"./foo.js").then((mod) => {
			console.log("foo is ", mod)
		})

		import(
			/* webpackChunkName: "chunk-foo-a" */
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
