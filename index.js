import { playlistArr } from '/playlist.js'

/*
Challenge
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/
const pl2 = []
 playlistArr.forEach(song => {
  pl2.push(
    `<section class="card">
    <div class="card-start">
        <img src="/images/${song.albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${song.title}</h4>
            <p class="card-artist">${song.artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
  )
});
console.log('pl2: ', pl2)
console.log('playlistArr: ', playlistArr)
document.getElementById('container').innerHTML = pl2.join('')
