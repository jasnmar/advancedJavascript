/*
Challenge:
    1. Convert this to arrow functions.
*/

function calculateVolume(length) {
    return function(width) {
        return function(height) {
            return length * width * height
        }
    }
}

// const withLength = calculateVolume(2)
// const withLengthAndWidth = withLength(3)
// const volume = withLengthAndWidth(4)

const volume = calculateVolume(2)(3)(4)

console.log(volume)