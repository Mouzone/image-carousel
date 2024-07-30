function makeArrowsInteractive() {
    const arrows = document.querySelectorAll(".arrow")
    arrows.forEach(arrow => {
        arrow.addEventListener("click", event => {
            const curr_image = document.querySelector(".active")
            let curr_position = parseInt(curr_image.id)
            if (event.currentTarget.id === "left") {
                curr_position -= 1
                if (curr_position < 0) {
                    curr_position = IMAGE_LINKS.length - 1
                }
            } else {
                curr_position += 1
                if (curr_position >= IMAGE_LINKS.length) {
                    curr_position = 0
                }
            }

            changeSlide(curr_position)
        })
    })
}


function generateProgressCircles() {
    const progress_circles = document.getElementById("progress")
    let counter = 0

    for (let i = 0; i < IMAGE_LINKS.length; i++) {
        const circle = document.createElement("span")
        progress_circles.appendChild(circle)
        circle.id = `${counter}`
        circle.classList.add("dot")
        if (counter === 0){
            circle.classList.add("active")
        }
        circle.addEventListener("click", event => {
            changeSlide(parseInt(event.currentTarget.id))
        })
        counter++
    }
}


function changeSlide(curr_position) {
    const curr_active = document.querySelector(".active")
    curr_active.classList.remove("active")
    const to_be_active = document.getElementById(`${curr_position}`)
    to_be_active.classList.add("active")

    const image_element = document.querySelector("img")
    image_element.src = `images/${IMAGE_LINKS[curr_position]}`
}


window.onload = function() {
    let timeout;
    function resetTimer() {
        clearTimeout(timeout);
        timeout = setTimeout(advanceSlide, 2000); // 5 seconds of inactivity
    }

    function advanceSlide(element, eventType) {
        const right_arrow = document.querySelector("#right")
        const click_event = new Event("click");
        right_arrow.dispatchEvent(click_event)
    }

    const arrows = document.querySelectorAll(".arrow")
    arrows.forEach(arrow => {
        arrow.addEventListener('click', resetTimer);
    })

    // Start the timer initially
    makeArrowsInteractive()
    generateProgressCircles()
    resetTimer();
}


const IMAGE_LINKS = [
    "dog-puppy-on-garden-royalty-free-image-1586966191.avif",
    "download.jpeg",
    "download (1).jpeg",
    "download (2).jpeg",
    "images.jpeg"
]
