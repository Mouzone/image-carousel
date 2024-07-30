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

    const curr_active = document.querySelector(".active")
    curr_active.classList.remove("active")
    const to_be_active = document.getElementById(`${curr_position}`)
    to_be_active.classList.add("active")
})

const right_button = document.querySelector("button#right")
right_button.addEventListener("click", event => {
    curr_position += 1
    if (curr_position >= image_links.length) {
        curr_position = 0
    }
    image_element.src = `images/${image_links[curr_position]}`

    const curr_active = document.querySelector(".active")
    curr_active.classList.remove("active")
    const to_be_active = document.getElementById(`${curr_position}`)
    to_be_active.classList.add("active")
})

const progress_circles = document.getElementById("progress")
let counter = 0
image_links.forEach(link => {
    const circle = document.createElement("span")
    progress_circles.appendChild(circle)
    circle.id = `${counter}`
    circle.classList.add("dot")
    if (counter === 0){
        circle.classList.add("active")
    }
    circle.addEventListener("click", event => {
        const curr_active = document.querySelector(".active")
        curr_active.classList.remove("active")
        const to_be_active = event.currentTarget
        to_be_active.classList.add("active")
        image_element.src = `images/${image_links[parseInt(event.currentTarget.id)]}`
        curr_position = parseInt(event.currentTarget.id)
    })
    counter++
})



// todo: add auto play based on timer