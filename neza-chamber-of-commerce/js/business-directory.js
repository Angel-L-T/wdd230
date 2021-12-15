function loadBusiness () {
    const businessUrl = "https://angel-l-t.github.io/wdd230/neza-chamber-of-commerce/json/directory.json";

    fetch(businessUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        
        const nezaBusinesses = jsonObject.businesses;
            
        nezaBusinesses.forEach(business => {
            let container = document.createElement("div");

            let nameH3 = document.createElement("h3");
            let contactDiv = document.createElement("div");

            let logoImg = document.createElement("img");
            let logoDiv = document.createElement("div");

            let websiteP = document.createElement("p");

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

                logoDiv.innerHTML = "Logo:";
                logoDiv.appendChild(logoImg);
            } else {
                logoDiv.innerHTML = "Logo: N/A";
            }

            websiteP.innerHTML = business.website;

            container.appendChild(nameH3);
            container.appendChild(contactDiv);
            container.appendChild(logoDiv);
            container.appendChild(websiteP);
        });
    }
  );
}

loadBusiness();