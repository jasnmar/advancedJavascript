const exerciseTimeMins = 40

let message = ''

if (exerciseTimeMins < 30) {
    message = 'You need to try harder!'
}
else if(exerciseTimeMins < 60) {
    message = 'Doing good!'
}
else {
    message = 'Excellent!'
}
//const message = exerciseTimeMins < 30 ? 'You need to try harder!' : 'Doing good!'

console.log(message)