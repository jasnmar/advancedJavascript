const books = {
    "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
    "b002": { title: "1984", price: 15.99, isAvailable: false },
    "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
    "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
  }

  const bookKeys = Object.keys(books)
  console.log('bookKeys: ', bookKeys)
  
  bookKeys.forEach(key => console.log(key))
  bookKeys.forEach(key => console.log(books[key].title))
  /*
  Challenge:
    1. Use Object.keys to get an array of keys. 
       You can store it in a const 'bookKeys'. 
    2. Iterate over bookKeys twice.
       A) First log each individual key in the array.
       B) Then log only the book titles.
  */
  
  
  
  /*
  Output: b001
          b002
          b003
          b004
  Output: To Kill a Mockingbird
          1984
          The Great Gatsby
          Moby Dick
  */
  