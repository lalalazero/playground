export const load = (share) => {
	if(share) {
		import("./share.js").then(mod => {
			console.log('a module: share=', mod.default)
		})
	}
}
