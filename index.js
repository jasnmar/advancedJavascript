function debounce(func, delay) {
    return (...args) => {
        setTimeout(() => {
            func(...args)
        }, delay);
    }
    /*
    Challenge:
        1. Write logic inside this function to make 
           handleInput fire only when there has been no 
           activity in the input field for ‘delay’ seconds. 
           handleInput should NOT run when the first event 
           is detected.
           🛟 hint.md for help!
    */
    }
     
    function handleInput(e) {
        console.log('Input detected from element with id ' + e.target.id)
    }
    
    document.getElementById('name-input').addEventListener('input', debounce(handleInput, 1000))
    //document.getElementById('name-input').addEventListener('input', handleInput)
    
    