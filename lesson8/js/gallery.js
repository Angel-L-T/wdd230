//#region ---Code to show the amount of days passed since the last visit.

// This "if" block sets the lastDate variable correctly, so users doesn't see a weird day count the first time
// they visit the gallery page. I used var because it is not block scoped.
if (localStorage.getItem("lastDate") == null) {
    var lastDate = new Date(currentDate);
}
else {
    var lastDate = new Date(localStorage.getItem("lastDate")); //assigning last date to a variable to use it in our function.
}

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

    // This "if" block sets the message to show in "Last visit:"
if (numDays < 1) {
    daySpace.innerHTML = "Today";
}
else if (numDays == 1) {
    daySpace.innerHTML = numDays + " day ago"
}
else {
    daySpace.innerHTML = numDays + " days ago"
}
//#endregion