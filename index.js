/*
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
⚠️ Remember to handle all errors!
*/
 

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    if (!response.ok)
        throw new Error("Error with the API");
    const data = await response.json()
    data.forEach(post => {
        console.log('post: ', post)
    });
} catch(err) {
    console.log('err: ', err)
}