export const load = (share) => {
	if(share) {
		import("./share.js").then(mod => {
			console.log('b module: share=', mod.default)
		})
	}
}