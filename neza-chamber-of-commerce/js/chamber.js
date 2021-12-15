//#region -----------DECLARING FUNCTIONS-----------

function lastUpdate () {
    const lastMod = document.lastModified;
    document.getElementById("last-modified").innerHTML = lastMod;
}

function currentYear () {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("current-year").innerHTML = year;
}

function toggleMenu () {
    document.getElementsByClassName("neza-nav")[0].classList.toggle("toggle-menu");
}

//#endregion -----------DECLARING FUNCTIONS-----------

//#region -----------CALLING FUNCTIONS-----------
lastUpdate();
currentYear();

document.getElementById("menu").addEventListener("click", toggleMenu);
//#endregion -----------CALLING FUNCTIONS-----------