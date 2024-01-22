function onLoad() {
    import("./share.js").then(mod => {
        console.log('home entry, share=', mod.default)
    })
}

if(window) {
    window.onload = onLoad
}