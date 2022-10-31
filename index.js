// Create two sets of three functions, adding 1, 2, and 3 'points', respectively, to their corresponding scores.
let homeScore = 0
let guestScore = 0

// HOME
function plus_one() {
    score = homeScore += 1
    document.getElementById("home_score").textContent = score
    console.log(score)
}
function plus_two() {
    score = homeScore += 2
    document.getElementById("home_score").textContent = score
    console.log(score)
}
function plus_three() {
    score = homeScore += 3
    document.getElementById("home_score").textContent = score
    console.log(score)
}

// GUEST
function guest_plus_one() {
    score = guestScore += 1
    document.getElementById("guest_score").textContent = score
    console.log(score)
}
function guest_plus_two() {
    score = guestScore += 2
    document.getElementById("guest_score").textContent = score
    console.log(score)
}
function guest_plus_three() {
    score = guestScore += 3
    document.getElementById("guest_score").textContent = score
    console.log(score)
}