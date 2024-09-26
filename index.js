/*
Challenge:
    1. Convert this to arrow functions.
*/

const calculateVolume = (length) => (width) => (height) => length * width * height

// const withLength = calculateVolume(2)
// const withLengthAndWidth = withLength(3)
// const volume = withLengthAndWidth(4)

const volume = calculateVolume(2)(3)(4)

console.log(volume)