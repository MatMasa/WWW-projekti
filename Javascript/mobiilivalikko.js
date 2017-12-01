//Tän pohjalta: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp 

function mobiilivalikko() {
    var x = document.getElementById("myResponav");
    if (x.className === "responav") {
            x.className += " responsive";
    } else {
            x.className = "responav";
    }
}