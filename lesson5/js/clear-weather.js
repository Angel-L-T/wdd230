const currentdate = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatDate = currentdate.toLocaleDateString('en-UK', options);
document.querySelector("footer span").textContent = formatDate;

function toggleMenu() {
    document.getElementsByClassName("responsive-nav")[0].classList.toggle("responsive");
}


// Down here is the code to show that on Saturday there will be pancakes
const dayOption = {weekday: 'long'}
const dayName = currentdate.toLocaleDateString('en-UK', dayOption)
// console.log(dayName)

if (dayName == "Friday") {
    document.getElementsByClassName("announcement")[0].classList.toggle("is-friday")
}

