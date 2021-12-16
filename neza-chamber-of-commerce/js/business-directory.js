//#region Declaring Functions

function loadBusiness () {
    const businessUrl = "https://angel-l-t.github.io/wdd230/neza-chamber-of-commerce/json/directory.json";

    fetch(businessUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        
        const nezaBusinesses = jsonObject.businesses;

        let directory = document.getElementById("directory");
            
        nezaBusinesses.forEach(business => {

            let container = document.createElement("div");
            let nameH3 = document.createElement("h3");

            // Containers
            let contactDiv = document.createElement("div");
            let logoDiv = document.createElement("div");
            let websiteDiv = document.createElement("div");

            // Content Elements
            let logoP = document.createElement("p");
            let logoImg = document.createElement("img");
            let websiteA = document.createElement("a");
            
            // Filling Containers and Elements
            nameH3.innerHTML = business.name;
            
            business.contact.forEach(info => {
                    let contactP = document.createElement("p");

                    contactP.innerHTML = info;
                    contactDiv.appendChild(contactP);
                }
            )

            if (business.logo != "N/A") {
                logoImg.setAttribute("src", `https://angel-l-t.github.io/wdd230/neza-chamber-of-commerce/images/${business.logo}`);
                logoImg.setAttribute("alt", `${business.name} logo.`);

                logoP.innerHTML = "Logo: ";
                logoDiv.appendChild(logoP);
                logoDiv.appendChild(logoImg);
            } else {
                logoP.innerHTML = `Logo: ${business.logo}`;
                logoDiv.appendChild(logoP);
            }

            if (business.website != "N/A") {
                websiteA.innerHTML = `Website: ${business.website}`;
                websiteA.setAttribute("href", business.website);
                websiteA.setAttribute("target", "_blank");
                websiteDiv.appendChild(websiteA);
            } else {
                websiteA.innerHTML = `Website: ${business.website}`;
                websiteDiv.appendChild(websiteA);
            }


            container.appendChild(nameH3);
            container.appendChild(contactDiv);
            container.appendChild(logoDiv);
            container.appendChild(websiteDiv);
            container.setAttribute("class", "container");

            directory.appendChild(container);
        });
    }
  );
}

function displayGrid() {
    let containers = document.querySelectorAll(".container");
    let directory = document.getElementById("directory");

    directory.classList.add("grid");

    containers.forEach(
        container => {
            container.classList.add("grid");}
    )
}

function displayList() {
    let containers = document.querySelectorAll(".container");
    let directory = document.getElementById("directory");

    directory.classList.remove("grid");

    containers.forEach(
        container => {
            container.classList.remove("grid");
        }
    )
}
//#Endregion Declaring Functions

// Calling Functions
document.getElementById("grid-directory").addEventListener("click", displayGrid);
document.getElementById("list-directory").addEventListener("click", displayList);
loadBusiness();