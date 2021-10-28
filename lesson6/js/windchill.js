// Code for the wind chill calculator.
const temp = document.getElementById("temp").innerHTML;
const mph = document.getElementById("mph").innerHTML;
const windChillSpace = document.getElementById("wind-chill");

function calcWindchill(temp, mph) {
    const windFactor = 35.74 + 0.6215*(temp) - 35.75*(mph)**0.16 + 0.4275*(temp)*(mph)**0.16
    const windChill = Math.round(windFactor);
    windChillSpace.innerHTML = windChill + " °F"; // windChillSpace.innerHTML = `${windChill} °F`; <-- How to do it with a Template Literal.
}

if (temp <= 50 && mph > 3) {
    calcWindchill(temp, mph);
}

else {
    windChillSpace.innerHTML = "N/A"
}