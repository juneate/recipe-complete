const allImages = [
  {
    filename: `img/gallery-a.jpg`, 
    caption: `Baguettes sliced open`
  }, {
    filename: `img/gallery-b.jpg`,
    caption: `Baguette with cheese`
  }, {
    filename: `img/gallery-c.jpg`,
    caption: `Delicious sandwich`
  }
]

// Select the gallery
const theGallery = document.querySelector(`#gallery`)

// Create a list of controls
const theControls = document.createElement(`ol`)
theControls.classList.add(`gallery-controls`)

/////////// POPULATE THE CONTROLS AND GALLERY ////////////////////////

// Runs once for each of the Objects within allImages Array
allImages.forEach(function(anImg, index) {

  /////////////// THE BUTTON CONTROL /////////////////////////////
  // Build a <li>, with a <button> inside of it
  const theItem = document.createElement(`li`)
  
  const theBtn = document.createElement(`button`)
  theBtn.setAttribute(`data-image`, `img${index}`)
  theBtn.setAttribute(`aria-controls`, `img${index}`)
  theBtn.setAttribute(`aria-label`, `View image of ${anImg.caption}`)
  theBtn.classList.add(`gallery-btn`)

  // Add the button to the list item
  theItem.appendChild(theBtn)

  // Add the li to the controls
  theControls.appendChild(theItem)



  /////////////// THE GALLERY IMAGE /////////////////////////////
  const theImg = document.createElement(`img`)
  theImg.setAttribute(`src`, anImg.filename)
  theImg.setAttribute(`alt`, anImg.caption)
  theImg.setAttribute(`id`, `img${index}`)
  theImg.classList.add(`gallery-img`)

  // Add the img to the gallery
  theGallery.appendChild(theImg)



  /////////////// ACTIVATE THE FIRST IMG /////////////////////////////
  if (index === 0) {
    // It's the first image added, so make the image (and it's button) active
    theBtn.classList.add(`active`)
    theImg.classList.add(`active`)
  }
})



/* 
When I click the `.gallery-controls`...
  - Remove `.active` from any `.gallery-btn.active`
  - Remove `.active` from any `.gallery-img.active`
  
  - Find the `.gallery-img` that matches id from `aria-controls`

  - For the `.gallery-btn` clicked, add `.active`
  - For the `.gallery-img` that matches, add `.active`
*/
theControls.addEventListener(`click`, function(event) {

  // The thing that was clicked
  const theBtn = event.target
  
  // Do nothing unless a non-active .gallery-btn is clicked
  if (theBtn.matches(`.gallery-btn:not(.active)`)) {

    // Select the active elements (btn and img)
    const activeBtn = document.querySelector(`.gallery-btn.active`)
    const activeImg = document.querySelector(`.gallery-img.active`)

    // Remove the active classes
    activeBtn.classList.remove(`active`)
    activeImg.classList.remove(`active`)

    // Get the image that matches this button
    const imgId = theBtn.getAttribute(`aria-controls`)

    // Find the image that matches
    const theImg = document.querySelector(`#${imgId}`)

    // Activate the button and image
    theBtn.classList.add(`active`)
    theImg.classList.add(`active`)
  }
})



// Add the controls to the gallery
theGallery.appendChild(theControls)




/* 
<figure class="gallery" id="gallery">
  <ol class="gallery-controls" id="controls">
    <li><button class="gallery-btn" data-image="img1" aria-controls="img1" aria-label="Image 1"></button></li>
    <li><button class="gallery-btn active" data-image="img2" aria-controls="img2" aria-label="Image 2"></button></li>
    <li><button class="gallery-btn" data-image="img3" aria-controls="img3" aria-label="Image 3"></button></li>
  </ol>
  <img src="img/gallery-a.jpg" alt="Baguettes sliced open" id="img1" class="gallery-img">
  <img src="img/gallery-b.jpg" alt="Baguette with cheese" id="img2" class="gallery-img active">
  <img src="img/gallery-c.jpg" alt="Delicious sandwich" id="img3" class="gallery-img">
</figure>
*/


