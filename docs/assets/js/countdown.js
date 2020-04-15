const year = new Date().getFullYear();
const twentysevenJuly = new Date(year, 3, 15).getTime();
console.log(twentysevenJuly);

// countdown
let timer = setInterval(function() {

    // get today's date
    const today = new Date().getTime();

    // get the difference
    const diff = twentysevenJuly - today;

    // math
    let d1 = 0;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // display
    document.getElementById("timer").innerHTML =
        "<div style=\"font-size:10px\">Stay tuned</div><br><div class=\"days\"> \
  <div class=\"numbers\">" + d1 + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + d1 + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + d1 + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + d1 + "</div>seconds</div> \
</div>";

}, 1000);