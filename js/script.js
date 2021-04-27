/* 
When I click a `.gallery-btn`...
  - Remove `.active` from any `.gallery-btn.active`
  - Remove `.active` from any `.gallery-img.active`
  
  - Find the `.gallery-img` that matches id from `aria-controls`

  - For the `.gallery-btn` clicked, add `.active`
  - For the `.gallery-img` that matches, add `.active`
*/


const allBtns = document.querySelector(`#controls`)


allBtns.addEventListener(`click`, function(event) {

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

