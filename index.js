const image = new Image()
image.src = "http://..."

image.addEventListener('load', console.log("Image Loaded"))
image.addEventListener('error', console.log("Image has NOT loaded"))

console.log(image)

/*
Challenge:
1. Create two event listeners. One should listen 
   out for the image loading and log “Image has 
   loaded”. The other should listen for an error 
   and log “Image has NOT loaded”.
*/