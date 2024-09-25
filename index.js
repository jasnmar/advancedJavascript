class Holiday {    
    /*
    Challenge:
        1. Make 'price' a private field.
        2. Create a getter for price which appends a $ sign 
           to the front and displays it to a max of 2 decimal 
           places. 
        3. Create a setter for price which updates price with a 
           new price.
        4. Test! 
    */
        #destination
        constructor(destination, price) {
            this.#destination = destination
            this.price = price
        }
    
        get destination() {
            return this.#destination
        }
    
        set destination(newDestination) {
            if (typeof newDestination !== 'string' || newDestination.length <= 0){
                throw new Error('Destination not valid')
            }
            this.#destination = newDestination
        }
    }
    
    const safari = new Holiday('Kenya', 1000)
    console.log(safari.price)