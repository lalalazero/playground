
export const y = (m) => {
	if(m) {
		import("./foo.js").then(mod => {
			console.log(m + mod.default)
		})
	}
}
export default x

