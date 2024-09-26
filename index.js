/*
Challenge:
    1. Create a generator that yields a random hex code on demand.
    - You might need to research how you can do something infinitely 
      inside a generator.
    - See if you can work out how to generate a random hex code.
    🛟 hint.md for help
*/
function* generator() {
    for (let i = 0; i < Infinity; i++) {
        const redVal1 = parseInt(Math.random()*16).toString(16)
        const redVal2 = parseInt(Math.random()*16).toString(16)
        const greVal1 = parseInt(Math.random()*16).toString(16)
        const greVal2 = parseInt(Math.random()*16).toString(16)
        const bluVal1 = parseInt(Math.random()*16).toString(16)
        const bluVal2 = parseInt(Math.random()*16).toString(16)
        
        const rgb = redVal1 + redVal2 + greVal1 + greVal2 + bluVal1 + bluVal2
        console.log('rgb: ', rgb)
        yield rgb
    }
    
}

const colorGen = generator()
document.getElementById('nextColorButton').addEventListener('click', () => {
    
    const color = colorGen.next().value
    /*
    Challenge:
        2. When the "Next Color" button is clicked, update 
           the textContent and backgroundColor attributes below.
    */
            document.getElementById('colorText').textContent = color
            document.getElementById('colorDisplay').style.backgroundColor = "#"+color
    })
    