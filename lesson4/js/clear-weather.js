const currentdate = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatDate = currentdate.toLocaleDateString('en-UK', options);
document.querySelector("footer span").textContent = formatDate;

function toggleMenu() {
    document.getElementsByClassName("responsive-nav")[0].classList.toggle("responsive");
}