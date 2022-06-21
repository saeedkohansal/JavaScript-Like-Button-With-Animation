// Define variables
const heart_button = document.getElementById("heart-button")
const heart_icon = document.getElementById("heart-icon")
const total_likes = document.getElementById("total-likes")

// Liking function
function add_like() {
    heart_button.setAttribute("class", "heartbeat red-heart")
    heart_icon.setAttribute("class", "bi bi-heart-fill")
    heart_icon.setAttribute("id", "liked")
    total_likes.innerHTML = parseInt(total_likes.innerHTML) + 1
}

// Unliking function
function remove_like() {
    heart_button.setAttribute("class", "white-heart")
    heart_icon.setAttribute("class", "bi bi-heart")
    heart_icon.setAttribute("id", "not-liked")
    total_likes.innerHTML = parseInt(total_likes.innerHTML) - 1
}

// Remove heartbeat animation
function remove_heartbeat() {
    heart_button.setAttribute("class", "red-heart")
}

// When heart button clicked
heart_button.onclick = function () {
    const like_checker = document.getElementById("liked")
    if (like_checker == null) {
        add_like()
        setTimeout(remove_heartbeat, 1000)
    } else {
        remove_like()
    }
}