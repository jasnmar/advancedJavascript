try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: "Holiday Nightmares",
            body: "When I was kidnapped in Scotland…",
            userId: 3,
        })
    })
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch(err) {
    console.log(err)
}  
/*
Challenge:
1. Add a headers object, setting the "Content-Type" to "application/json".
*/