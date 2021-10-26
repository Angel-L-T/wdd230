// Code to display date on the bottom.
const currentdate = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatDate = currentdate.toLocaleDateString('en-UK', options);

document.querySelector("footer span").textContent = formatDate;


// Code for the responsive navigation menu.
function toggleMenu() {
    document.getElementsByClassName("responsive-nav")[0].classList.toggle("responsive");
}


// Down here is the code to show that on Saturday there will be pancakes.
const dayOption = {weekday: 'long'}
const dayName = currentdate.toLocaleDateString('en-UK', dayOption)
    // console.log(dayName) <-- I checked the console to know if that was the value I wanted.

if (dayName == "Friday") {
    document.getElementsByClassName("announcement")[0].classList.toggle("is-friday")
}