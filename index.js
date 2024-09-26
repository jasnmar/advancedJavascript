function handleResize(e){
    console.log('resize happened on event: ' + e)
}


function throttle(func, delay) {
    let throttleTimeout = null
    return (...args) => {
        if (!throttleTimeout) {
            func(...args)
            throttleTimeout = setTimeout(() => {
                throttleTimeout = null
            }, delay)
        }
    }
}
const throttleHandleResize = throttle(handleResize, 500)
window.addEventListener('resize', throttleHandleResize)