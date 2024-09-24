const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    courses: ['intro to javascript', 'advanced javascript']
    }  
    
const studentDetailsCopy = {}

Object.assign(studentDetailsCopy, studentDetails)

console.log(studentDetailsCopy)

/*
Challenge:
    1. Prove that what we have created here is a shallow copy.
*/
studentDetailsCopy.courses[0] = 'blonde'

console.log(studentDetailsCopy)
console.log(studentDetails)