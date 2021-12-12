//#region -----------DECLARING FUNCTIONS-----------

function lastUpdate () {
    const lastMod = document.lastModified;
    document.getElementById("last-modified").innerHTML = lastMod;
}

function toggleMenu () {
    document.getElementsByClassName("neza-nav")[0].classList.toggle("toggle-menu");
}

function upcomingEvents () {
    const eventsUrl = "/wdd230/neza-chamber-of-comerce/json/neza-events.json";

    fetch(eventsUrl).
    then(response => {return response.json}).
    then(function (eventsObj) {
        let nezaEvents = eventsObj
        console.log(nezaEvents);
    })
}
//#endregion -----------DECLARING FUNCTIONS-----------

//#region -----------CALLING FUNCTIONS-----------
document.getElementById("menu").addEventListener("click", toggleMenu);
lastUpdate();

//#endregion -----------CALLING FUNCTIONS-----------