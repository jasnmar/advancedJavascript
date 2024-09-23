/*
Challenge: Refactor the Library System Code.

You are working with a piece of code that handles 
information about books in a library system. The 
current code is functional but can be improved to 
be more concise and efficient by using short-circuiting, 
nullish coalescing, and Optional Chaining.

The existing code performs the following tasks:
- Pushes an object with title, author, year published, 
  and availability to an array 'collection'
- Provides default values for missing information.
*/

const collection = []

function addBookToCollection(title, author, yearPublished, libraryData) {
    // Explicitly check for title
    const newTitle = title || 'Unknown Title'
    const newAuth = author || 'Unknown Author'
    const newYear = yearPublished || 'Not Specified'
    const newAvailable = (libraryData?.locations?.mainLibrary && 'Available') || 'Not Available'


    // Push the book object to 'collection'
    collection.push({
        title: newTitle,
        author: newAuth,
        yearPublished: newYear,
        availability: newAvailable
    })
}
// Examples of adding a book
addBookToCollection('JavaScript: The Good Parts', 'Douglas Crockford', 2008, { locations: { mainLibrary: true}})
addBookToCollection('', 'William Shakespeare', null, null, )
addBookToCollection('House of Giants', 'Gemma Small', '', null, {locations: { mainLibrary: null}})
console.log(collection) // House of Giants is not yet published!!




