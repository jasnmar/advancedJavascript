const exerciseTimeMins = 20

let message = ''

if (exerciseTimeMins < 30) {
    message = 'You need to try harder!'
}
else {
    message = 'Doing good!'
}

console.log(message)