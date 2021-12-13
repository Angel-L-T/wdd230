//#region -----------DECLARING FUNCTIONS-----------

function lastUpdate () {
    const lastMod = document.lastModified;
    document.getElementById("last-modified").innerHTML = lastMod;
}

function toggleMenu () {
    document.getElementsByClassName("neza-nav")[0].classList.toggle("toggle-menu");
}

//#endregion -----------DECLARING FUNCTIONS-----------

//#region -----------CALLING FUNCTIONS-----------

document.getElementById("menu").addEventListener("click", toggleMenu);
lastUpdate();

//#endregion -----------CALLING FUNCTIONS-----------