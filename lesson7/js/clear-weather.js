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


// Down here is the code to show the amount of days passed since the last visit.
const lastDate = new Date(localStorage.getItem("lastDate")); //getting the last date
localStorage.setItem("lastDate", currentDate); // creating the last date with the current date.

const daySpace = document.getElementById("days-passed");

function calcDays (current, last) {
    const date1 = new Date(last);
    const date2 = new Date(current);

    const timePassed = date2.getTime() - date1.getTime();
    const daysPassed = timePassed / (1000 * 3600 * 24);

    return Math.round(daysPassed);
}

const numDays = calcDays(currentDate, lastDate); // You can pass strings with the date to this function, to test it. (e.g. "Sat Oct 30 2021 15:19:11 GMT-0500 (Central Daylight Time)")

if (numDays < 1) {
    daySpace.innerHTML = "Today";
}
else if (numDays == 1) {
    daySpace.innerHTML = numDays + " day ago"
}
else {
    daySpace.innerHTML = numDays + " days ago"
}
