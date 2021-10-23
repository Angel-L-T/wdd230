const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", liAdder);
input.addEventListener("keypress", function (e) {if (e.key === 'Enter') {liAdder();} } );

function liAdder() {
    if (input.value != "") {
        const listItem = document.createElement("li");
        const buttonItem = document.createElement("button");

        listItem.innerHTML = input.value;
        buttonItem.innerHTML = "❌";

        listItem.appendChild(buttonItem);

        list.appendChild(listItem);

        buttonItem.addEventListener("click", function() {list.removeChild(listItem);})
    }

    input.value = "";
    input.focus();
};