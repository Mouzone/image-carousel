const slideshow = document.getElementById("slideshow")
const image_element = document.querySelector("img")
image_links = [
    "dog-puppy-on-garden-royalty-free-image-1586966191.avif",
    "download.jpeg",
    "download (1).jpeg",
    "download (2).jpeg",
    "images.jpeg"
]
let curr_position = 0
const left_button = document.querySelector("button#left")
left_button.addEventListener("click", event => {
    curr_position -= 1
    if (curr_position < 0) {
        curr_position = image_links.length - 1
    }
    image_element.src = `images/${image_links[curr_position]}`
})

const right_button = document.querySelector("button#right")
right_button.addEventListener("click", event => {
    curr_position += 1
    if (curr_position >= image_links.length) {
        curr_position = 0
    }
    image_element.src = `images/${image_links[curr_position]}`
})

// todo: generate circles, and each circle links to the slide when clicked
// todo: add auto play based on timer