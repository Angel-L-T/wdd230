const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", 
    function() {
        if (input.value != "") {
            const listItem = document.createElement("li");
            const buttonItem = document.createElement("button");

            listItem.textContent = input.value;
            buttonItem.textContent = "❌";

            listItem.appendChild(buttonItem);

            list.appendChild(listItem);

            buttonItem.addEventListener("click", function() {list.removeChild(listItem);})
        }

        input.value = "";
        input.focus();
    }
);