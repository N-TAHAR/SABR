let svgLine = document.querySelectorAll('.line');

for(let i = 0; i < svgLine.length; i++){
  let line = svgLine[i];
  let length = line.getTotalLength();
  console.log(length);
  line.style.strokeDasharray = length;
  line.style.strokeDashoffset = length;
  var waypoint = new Waypoint({
    element: line,
    handler: function() {
      line.style.animation = "dash 3s linear forwards";
    },
    offset: '100%'
  });
}


var countDownDate = new Date("Apr 30, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".timer").innerHTML = "j-" + days + " " + hours + ":"
  + minutes + ":" + seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".timer").innerHTML = "EXPIRED";
  }
}, 1000);
