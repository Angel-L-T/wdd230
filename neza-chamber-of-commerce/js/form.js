function displayDescription () {
    let selection = document.getElementById("membership-selection");
    let nonProfit = document.getElementsByClassName("non-profit");
    let bronze = document.getElementsByClassName("bronze");
    let silver = document.getElementsByClassName("silver");
    let gold = document.getElementsByClassName("gold");

    if (selection.value == "non-profit") {
        nonProfit[0].classList.add("show-description");
    } else {
        nonProfit[0].classList.remove("show-description");
    }

    if (selection.value == "bronze") {
        bronze[0].classList.add("show-description");
    } else {
        bronze[0].classList.remove("show-description");
    }

    if (selection.value == "silver") {
        silver[0].classList.add("show-description");
    } else {
        silver[0].classList.remove("show-description");
    }

    if (selection.value == "gold") {
        gold[0].classList.add("show-description");
    } else {
        gold[0].classList.remove("show-description");
    }
}

document.getElementById("membership-selection").addEventListener("change", displayDescription);