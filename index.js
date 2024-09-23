const library = {
    sections: {
        fiction: {
            genres: {
                fantasy: [
                    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
                    { title: "A Game of Thrones", author: "George R.R. Martin", year: 1996 }
                ],
                scienceFiction: [
                    { title: "Dune", author: "Frank Herbert", year: 1965 },
                    { title: "Neuromancer", author: "William Gibson", year: 1984 }
                ]
            }
        }
    }
}

/*
Challenge:
    1. Use the logical AND operator to log The Hobit object. 
       Notice how undefined is returned if you break the chain. 
*/

console.log(library && library.sections && library.sections.fiction && library.sections.fiction.genres && library.sections.fiction.genres.fantasy[0])

// console.log(library.sections.fiction.genres.fantasy[0].year)