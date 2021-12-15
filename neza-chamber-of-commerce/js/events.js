
function upcomingEvents () {
    const eventsUrl = "https://angel-l-t.github.io/wdd230/neza-chamber-of-commerce/json/neza-events.json";

    fetch(eventsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        
        const nezaEvents = jsonObject['events'];
            
        nezaEvents.forEach(event => {
            let eventsContent = document.createElement("p");

            eventsContent.innerHTML = event;

            document.getElementById("events").appendChild(eventsContent);
        });
    }
  );
}

upcomingEvents();

