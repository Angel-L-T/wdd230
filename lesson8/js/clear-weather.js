// Code to display date on the bottom.
const currentDate = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function footDate(currentDate, options) {
    document.querySelector("footer span").textContent = currentDate.toLocaleDateString('en-UK', options);
}

footDate(currentDate, options);

// Code for the responsive navigation menu.
function toggleMenu() {
    document.getElementsByClassName("responsive-nav")[0].classList.toggle("responsive");
}

// Down here is the code to show that on Saturday there will be pancakes.
const dayOption = {weekday: 'long'}
const dayName = currentDate.toLocaleDateString('en-UK', dayOption)
    // console.log(dayName) <-- I checked the console to know if that was the value I wanted.

if (dayName == "Friday") {
    document.getElementsByClassName("announcement")[0].classList.toggle("is-friday")
}

// Code to change range in input type "range"
function changeRating(rating) {
    document.getElementById("rating").innerHTML = rating;
}