//#region ---Variables and Constants

/*Foot Date*/
const currentDate = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

/*Toggle menu*/
const dayOption = {weekday: 'long'}
const dayName = currentDate.toLocaleDateString('en-UK', dayOption)

//#endregion

//#region ---Code to display date on the bottom.
function footDate(currentDate, options) {
    document.querySelector("footer span").textContent = currentDate.toLocaleDateString('en-UK', options);
}

footDate(currentDate, options);
//#endregion

//#region ---Code for the responsive navigation menu.
function toggleMenu() {
    document.getElementsByClassName("responsive-nav")[0].classList.toggle("responsive");
}
//#endregion

//#region ---Code to show that on Saturday there will be pancakes.

if (dayName == "Friday") {
    document.getElementsByClassName("announcement")[0].classList.toggle("is-friday")
}
//#endregion

// Code to change range in input type "range"
function changeRating(rating) {
    document.getElementById("rating").innerHTML = rating;
}