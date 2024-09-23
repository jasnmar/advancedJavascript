/*
Challenge:
1. Get the promise working so it returns “Operation successful!” 
   if it resolves and "Operation failed." if it rejects. 
*/

const promise = => {
    const success = Math.random() > 0.5
    if (success) { 
      
    } else {

    }
})

// promise.then(response => console.log(response))

try {
    const response = await promise
    console.log(response)
} catch(err) {
    console.log(err)
}