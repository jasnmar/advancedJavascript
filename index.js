let str = 'SCRIMBA'
let newStr = ""

function reverseStr(str) {

    if (str.length===0) {
        console.log(newStr)
        return newStr
    } else {
        newStr += str.slice(-1)
        reverseStr(str.slice(0,-1))
    }
/*
Challenge:
    1. Write logic for a recursive function 
       that reverses a string.
    🛟 hint.md for help!
*/
}
console.log(reverseStr(str))
