const currentdate = new Date();
const currentyear = currentdate.getFullYear();
const lastupdate = document.lastModified;

document.querySelector("footer p span").textContent = currentyear;
document.getElementById("last-update-design").textContent = lastupdate;